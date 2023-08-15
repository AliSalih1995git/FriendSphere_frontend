import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUserData(userName: string | null): Observable<any> {
    return this.http.get(`/getProfile/${userName}`);
  }
  listImages(params: { path: string; max: number; sort: string }) {
    const { path, max, sort } = params;
    return this.http.post(`/listImages`, { path, sort, max });
  }
  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(`/uploadImages`, formData);
  }

  createPost(data: any): Observable<any> {
    return this.http.post(`/createPost`, data);
  }
  updateProfilePicture(url: string): Observable<string> {
    return this.http.put<string>(`/updateProfilePicture`, { url });
  }
}
