import { Component, OnInit } from '@angular/core';
import { UserModel } from '../interfaces/userData.model';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  user!: UserModel;
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
  }
}
