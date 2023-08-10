import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/AllInterface';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor(private http: HttpClient) {}

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`/getAllposts`);
  }

  createPost(payload: any): Observable<any> {
    console.log(payload, 'payload');

    return this.http.post(`/createPost`, payload);
  }
  uploadImages(formData: FormData): Observable<any> {
    console.log(formData, 'formData');

    return this.http.post(`/uploadImages`, formData);
  }
  comment(postId: string, comment: string): Observable<any> {
    return this.http.put(`/comment`, { postId, comment });
  }
}
