import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from './store/friend';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private http: HttpClient) {}

  getFriendsPageInfos(): Observable<any> {
    return this.http.get<Friend[]>(`/getFriendsPageInfos`);
  }

  cancelRequest(userId: string): Observable<any> {
    return this.http.put(`/cancelRequest/${userId}`, {});
  }

  acceptRequest(userId: string): Observable<any> {
    return this.http.put(`/acceptRequest/${userId}`, {});
  }

  deleteRequest(userId: string): Observable<any> {
    return this.http.put(`/deleteRequest/${userId}`, {});
  }
}
