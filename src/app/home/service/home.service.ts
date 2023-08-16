import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getSearchHistory(): Observable<any> {
    return this.http.get(`/getSearchHistory`);
  }

  search(searchTerm: string): Observable<any> {
    return this.http.post(`/search/${searchTerm}`, {});
  }

  addToSearchHistory(searchUser: string): Observable<any> {
    return this.http.put(`/addToSearchHistory`, { searchUser });
  }

  removeFromSearch(searchUser: string): Observable<any> {
    return this.http.put(`/removeFromSearch`, { searchUser });
  }
}
