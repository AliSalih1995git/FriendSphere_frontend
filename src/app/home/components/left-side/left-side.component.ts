import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
})
export class LeftSideComponent implements OnInit {
  user: any;
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
  }
}
