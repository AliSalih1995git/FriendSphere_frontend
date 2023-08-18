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

  // reset password

  searchAccount(email: string): Observable<any> {
    return this.http.post(`/findUser`, { email });
  }

  sendEmail(email: string): Observable<any> {
    return this.http.post(`/sendResetPasswordCode`, { email });
  }

  verifyCode(email: string, code: string): Observable<any> {
    return this.http.post(`/validateResetCode`, { email, code });
  }

  changePassword(email: string, password: string): Observable<any> {
    return this.http.post(`/ChangePassword`, { email, password });
  }
}
