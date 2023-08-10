import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    return this.http.post(`/login`, formData);
  }

  register(formData: any): Observable<any> {
    return this.http.post(`/register`, formData);
  }
}
