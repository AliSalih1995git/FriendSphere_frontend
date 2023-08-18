import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.css'],
})
export class FriendshipComponent implements OnInit {
  @Input() friendshipp: any;
  @Input() profileid: any;

  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('menu1') menu1Ref!: ElementRef;

  friendship: any;
  friendsMenu = true;
  respondMenu = true;
  user: any;
  error = '';

  constructor(
    private profileService: ProfileService,
    private userService: MainServiceService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUserData();
    this.friendship = this.friendshipp;
  }

  addFriendHandler() {
    this.profileService.addFriend(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  cancelRequestHandler() {
    this.profileService.cancelRequest(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  followHandler() {
    this.profileService.follow(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  unfollowHandler() {
    this.profileService.unfollow(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  acceptRequestHandler() {
    this.profileService.acceptRequest(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  unfriendHandler() {
    this.profileService.unfriend(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  deleteRequestHandler() {
    this.profileService.deleteRequest(this.profileid).subscribe((response) => {
      this.friendship = response;
    });
  }

  toggleFollow() {
    if (this.friendship.following) {
      this.unfollowHandler();
    } else {
      this.followHandler();
    }
  }

  setFriendsMenu(value: boolean) {
    this.friendsMenu = value;
  }

  setRespondMenu(value: boolean) {
    this.respondMenu = value;
  }
  handleFriendsMenu() {
    this.friendsMenu = !this.friendsMenu;
  }
}
