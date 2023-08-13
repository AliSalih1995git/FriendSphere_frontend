import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';
import { Post } from '../interfaces/AllInterface';
import { PostServiceService } from './post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  user!: any;
  posts: Post[] = [];
  subscription!: Subscription;

  constructor(
    private mainService: MainServiceService,
    private postService: PostServiceService
  ) {}

  ngOnInit(): void {
    this.subscription = this.postService
      .getNewPosts()
      .subscribe((newPost: any) => {
        console.log(newPost, 'new opst in component');

        this.posts.unshift(newPost);
      });
    this.user = this.mainService.getUserData();
    this.fetchPosts();
  }

  fetchPosts() {
    this.subscription = this.postService.getAllPost().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
