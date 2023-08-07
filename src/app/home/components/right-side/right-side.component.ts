import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent implements OnInit {
  user: any;
  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
  }
}
