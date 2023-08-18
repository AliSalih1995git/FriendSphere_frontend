import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  constructor(private http: HttpClient) {}

  getConversations(conversationId: string): Observable<any[]> {
    console.log(conversationId, 'conversationId');

    return this.http.get<any[]>(`/getConversation/${conversationId}`);
  }

  getMessages(currentChatId: any): Observable<any> {
    return this.http.get<any>(`/messageGet/${currentChatId}`);
  }
  addMessage(message: any): Observable<any> {
    return this.http.post<any>(`/addMessage`, message);
  }
  getUser(friendId: string): Observable<any> {
    return this.http.get(`/getUser/${friendId}`);
  }
  getFriends(currentId: string): Observable<any> {
    console.log(currentId, 'currentId');

    return this.http.get(`/getFriend/${currentId}`);
  }
  twoConversation(currentId: string, userId: string) {
    return this.http.get(
      `/getFirstSecondConversation/find/${currentId}/${userId}`
    );
  }
}
