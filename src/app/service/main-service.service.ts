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
  dataURItoBlob(dataURI: any) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }
}
