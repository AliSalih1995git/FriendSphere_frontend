import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'socket.io-client';
import { WebsocketService } from './service/websocket.service';
import { MessengerService } from './service/messenger.service';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
})
export class MessengerComponent implements OnInit, OnDestroy {
  user: any;
  conversations: any[] = [];
  currentChat: any = null;
  messages: any[] = [];
  newMessage: string = '';
  onlineUsers: any[] = [];

  constructor(
    private messageService: MessengerService,
    private websocketService: WebsocketService,
    private mainService: MainServiceService
  ) {}

  ngOnInit(): void {
    this.initializeUser();
    this.initializeSocket();
    this.loadConversations();
    // console.log(this.onlineUsers, 'online users');
  }

  ngOnDestroy(): void {
    this.websocketService.getSocket().disconnect();
  }

  private initializeUser(): void {
    this.user = this.mainService.getUserData();
  }

  initializeSocket(): void {
    const socket = this.websocketService.getSocket();

    socket.on('getMessage', (data: any) => {
      const arrivalMessage = {
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      };
      this.handleArrivalMessage(arrivalMessage);
    });

    socket.emit('addUser', this.user.id);

    socket.on('getUsers', (users: any[]) => {
      this.onlineUsers = this.user.following.filter((f: any) =>
        users.some((u) => u.userId === f)
      );
    });
  }

  loadConversations(): void {
    this.messageService.getConversations(this.user.id).subscribe({
      next: (res) => {
        this.conversations = res;
      },
      error: (err) => console.log(err),
    });
  }

  loadMessages(): void {
    if (this.currentChat) {
      this.messageService.getMessages(this.currentChat._id).subscribe({
        next: (res) => {
          this.messages = res;
        },
        error: (err) => console.log(err),
      });
    }
  }

  handleSubmit(): void {
    if (!this.currentChat) {
      return;
    }

    const socket = this.websocketService.getSocket();
    const message = {
      sender: this.user.id,
      text: this.newMessage,
      conversationId: this.currentChat._id,
    };

    const receiverId = this.currentChat.members.find(
      (member: any) => member !== this.user.id
    );

    socket.emit('sendMessage', {
      senderId: this.user.id,
      receiverId,
      text: this.newMessage,
    });

    this.messageService.addMessage(message).subscribe({
      next: (res) => {
        this.messages.push(res);

        this.newMessage = '';
      },
      error: (err) => console.log(err),
    });
  }

  handleArrivalMessage(arrivalMessage: any): void {
    if (this.currentChat?.members.includes(arrivalMessage.sender)) {
      this.messages.push(arrivalMessage);
    }
  }

  setCurrentChat(conversation: any): void {
    this.currentChat = conversation;

    this.loadMessages();
  }
}
