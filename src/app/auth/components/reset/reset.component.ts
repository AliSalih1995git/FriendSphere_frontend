import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  user: any;
  visible = 0;
  loading = false;
  email = '';
  code = '';
  password = '';
  confPassword = '';
  userInfos = '';
  error: string = '';

  constructor(
    private mainService: MainServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.mainService.getUserData();
  }
  logout() {
    this.mainService.logout();
    this.router.navigate(['/login']);
  }
  userInfosDetails(userIn: any) {
    console.log(userIn, 'userinfo');
    this.userInfos = userIn;
  }
  visibleResult(num: number) {
    console.log(num), 'visible number';
    this.visible = num;
  }
  handleError(errors: string) {
    this.error = errors;
  }
}
