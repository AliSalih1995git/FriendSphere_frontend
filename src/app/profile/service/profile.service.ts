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
}
