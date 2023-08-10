import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @Input() setVisible!: boolean;
  constructor() {}

  ngOnInit(): void {}
  @Input() user: any;
  setVisiblePopup() {
    console.log('post popup open');

    this.setVisible = true;
  }
  closePopup() {
    console.log('post popup close');

    this.setVisible = false;
  }
}
