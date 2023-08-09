import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor(private http: HttpClient) {}

  createPost(payload: any): Observable<any> {
    console.log(payload, 'Post DAta');

    return this.http.post(`/createPost`, payload);
  }
}
