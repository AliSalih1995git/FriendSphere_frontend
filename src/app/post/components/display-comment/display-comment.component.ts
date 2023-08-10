import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from '../../post-service.service';

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css'],
})
export class DisplayCommentComponent implements OnInit {
  @Input() comment!: any;
  constructor() {}

  ngOnInit(): void {}
}
