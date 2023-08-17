import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';
import { FriendService } from './friend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  user: any;
  data: any;
  type!: string;

  constructor(
    private mainService: MainServiceService,
    private friendsService: FriendService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    console.log(this.user, 'user');

    this.getData();
    this.type = this.route.snapshot.params['type'];
    console.log(this.type, 'type');
  }

  getData() {
    this.friendsService.getFriendsPageInfos().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data, 'data');
      },
      error: (err) => console.log(err),
    });
  }
}
