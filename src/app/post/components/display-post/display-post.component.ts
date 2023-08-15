import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from '../../post-service.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css'],
})
export class DisplayPostComponent implements OnInit {
  @Input() post: any;
  @Input() user: any;
  visible: boolean = false;
  commentsVisible: boolean = false;

  constructor(private postService: PostServiceService) {}

  ngOnInit(): void {}

  setPopupVisible(isVisible: boolean) {
    this.visible = isVisible;
  }
  handleComment(comment: any) {
    this.post.comments = comment;
  }
  toggleCommentVisibility() {
    this.commentsVisible = !this.commentsVisible;
  }
}
