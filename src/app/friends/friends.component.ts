import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';
import { FriendService } from './friend.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { invokeFriendData } from './store/friend.action';
import { selectFriends } from './store/friend.selector';

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
    private store: Store,
    private mainService: MainServiceService,
    private friendsService: FriendService,
    private route: ActivatedRoute
  ) {}

  datas$ = this.store.pipe(select(selectFriends));

  ngOnInit(): void {
    console.log(this.datas$, 'Observable response of friens');

    this.user = this.mainService.getUserData();
    console.log(this.user, 'user');

    this.store.dispatch(invokeFriendData());

    this.getData();
    this.type = this.route.snapshot.params['type'];
    console.log(this.type, 'type');
  }

  getData() {
    this.friendsService.getFriendsPageInfos().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data, 'Friend data');
      },
      error: (err) => console.log(err),
    });
  }
}
