import { Injectable } from '@angular/core';
import { UserModel } from '../interfaces/userData.model';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor() {}
  getDarkColor(): string {
    return '#333333';
  }

  getLightColor(): string {
    return '#F5F5F5';
  }
  darkTheme(): boolean {
    return true;
  }
  lightTheme(): boolean {
    return false;
  }
  getUserData(): any {
    let userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  logout() {
    localStorage.clear();
  }
}
