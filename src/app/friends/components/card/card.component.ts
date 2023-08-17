import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../../friend.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() userr: any;
  @Input() type: string = '';
  @Input() dataChanged: () => void = () => {};
  userId: string = '';

  constructor(private friendsService: FriendService) {}

  ngOnInit(): void {
    // this.userId = this.userr.id;
    console.log(this.userr, 'userrr');
    console.log(this.type, 'this.type');
  }

  handleCancelRequest(userId: string) {
    console.log('handleCancelRequest', userId);

    this.friendsService.cancelRequest(userId).subscribe({
      next: (res) => {
        if (res === 'ok') {
          this.dataChanged();
        }
      },
      error: (err) => console.log(err),
    });
  }

  handleConfirm(userId: string) {
    console.log('handleConfirm', userId);

    this.friendsService.acceptRequest(userId).subscribe({
      next: (res) => {
        if (res === 'ok') {
          this.dataChanged();
        }
      },
      error: (err) => console.log(err),
    });
  }

  handleDelete(userId: string) {
    console.log('handleDelete', userId);

    this.friendsService.deleteRequest(userId).subscribe({
      next: (res) => {
        if (res === 'ok') {
          this.dataChanged();
        }
      },
      error: (err) => console.log(err),
    });
  }
}
