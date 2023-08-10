import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent implements OnInit {
  user: any;
  friends: any;
  constructor(
    private mainService: MainServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
    console.log(this.user, 'USER');

    this.getAllFriends();
  }

  getAllFriends() {
    this.mainService.getAllUnknownFriends(this.user.id).subscribe({
      next: (res) => {
        this.friends = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  handleAddFriend(friendId: string) {
    this.mainService.addFriend(friendId).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        console.log(res, 'Add friend');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
