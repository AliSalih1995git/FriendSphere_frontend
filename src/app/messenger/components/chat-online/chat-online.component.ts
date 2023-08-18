import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessengerService } from '../../service/messenger.service';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-chat-online',
  templateUrl: './chat-online.component.html',
  styleUrls: ['./chat-online.component.css'],
})
export class ChatOnlineComponent implements OnInit {
  @Input() onlineUsers!: string[];
  @Input() currentId!: string;
  @Output() setCurrentChat: EventEmitter<any> = new EventEmitter();

  user: any;
  friends: any[] = [];
  onlineFriends: any[] = [];

  constructor(
    private messegeService: MessengerService,
    private mainService: MainServiceService
  ) {}

  ngOnInit(): void {
    this.user = this.user = this.mainService.getUserData();
    this.getFriends();
  }

  getFriends() {
    this.messegeService.getFriends(this.currentId).subscribe({
      next: (res) => {
        this.friends = res;
        this.updateOnlineFriends();
      },
      error: (err) => console.log(err),
    });
  }

  updateOnlineFriends(): void {
    this.onlineFriends = this.friends.filter((f) =>
      this.onlineUsers.includes(f._id)
    );
    // console.log(this.onlineFriends, ' this.onlineFriends');
  }

  handleClick(users: any) {
    this.messegeService.twoConversation(this.currentId, users._id).subscribe({
      next: (res) => {
        this.setCurrentChat.emit(res);
      },
      error: (err) => console.log(err),
    });
  }
}
