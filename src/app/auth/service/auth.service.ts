import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BackendUrl: string = environment.backendUrl;

  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    return this.http.post(`${this.BackendUrl}/login`, formData);
  }

  register(formData: any): Observable<any> {
    return this.http.post(`${this.BackendUrl}/register`, formData);
  }
}
