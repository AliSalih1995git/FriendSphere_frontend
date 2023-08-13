import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../interfaces/AllInterface';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  private newPostSubject = new Subject<any>();
  constructor(private http: HttpClient) {}

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`/getAllposts`);
  }

  createPost(payload: any): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`/createPost`, payload).subscribe({
        next: (res) => {
          console.log(res, 'newpost on service');
          this.newPostSubject.next(res);
          observer.next(res);
          observer.complete();
        },
        error: (err) => {
          console.error(err);
          observer.error(err);
        },
      });
    });
  }

  getNewPosts(): Observable<any> {
    return this.newPostSubject.asObservable();
  }
  uploadImages(formData: FormData): Observable<any> {
    console.log(formData, 'formData');

    return this.http.post(`/uploadImages`, formData);
  }
  comment(postId: string, comment: string): Observable<any> {
    return this.http.put(`/comment`, { postId, comment });
  }
}
