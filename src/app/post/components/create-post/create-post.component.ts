import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  visible: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  @Input() user: any;
  setVisible() {
    this.visible = true;
  }
}
