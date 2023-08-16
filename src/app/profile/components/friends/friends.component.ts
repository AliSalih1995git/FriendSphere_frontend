import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  @Input() friends: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  trackByFriendIndex(index: number, friend: any): number {
    console.log(friend, 'Each friend');

    return index;
  }
}
