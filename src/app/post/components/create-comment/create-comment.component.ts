import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostServiceService } from '../../post-service.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  @Input() user: any;
  @Input() postId: any;
  @Output() comment: EventEmitter<any> = new EventEmitter<any>();
  textArea: string = '';
  constructor(private PostService: PostServiceService) {}

  ngOnInit(): void {}

  handleSubmit() {
    if (this.textArea) {
      this.PostService.comment(this.postId, this.textArea).subscribe({
        next: (res: any) => {
          this.comment.emit(res);
          console.log(res, 'comment Succesfull');

          this.textArea = '';
        },
        error: (error) => {
          console.log(error);

          // Handle error if needed
        },
      });
    }
  }
}
