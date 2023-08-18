import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @Input() visitor!: boolean;

  @Input() setVisible!: boolean;
  constructor() {}

  ngOnInit(): void {}
  @Input() user: any;
  setVisiblePopup() {
    this.setVisible = true;
  }
  closePopup() {
    this.setVisible = false;
  }
}
