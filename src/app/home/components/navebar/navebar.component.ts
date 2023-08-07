import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css'],
})
export class NavebarComponent implements OnInit {
  darkTheme: boolean = false;
  user: any;
  color: string = '#65676b';
  showSearchMenu = false;
  showUserMenu = false;
  page = 'home';
  @ViewChild('usermenu') userMenu!: ElementRef<any>;
  constructor(
    private mainService: MainServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.darkTheme = this.mainService.darkTheme();
    this.user = this.mainService.getUserData();
    console.log(this.user, 'USER');
  }

  outsideClickHandler(event: MouseEvent): void {
    if (!this.userMenu.nativeElement.contains(event.target)) {
      this.showUserMenu = false;
    }
    // this.showUserMenu = false;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }

  getAllPosts(): void {}
}
