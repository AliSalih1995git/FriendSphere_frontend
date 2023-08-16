import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { map } from 'rxjs';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css'],
})
export class NavebarComponent implements OnInit {
  @Input() page: string = 'home';
  darkTheme: boolean = false;
  user: any;
  color: string = '#65676b';
  showSearchMenu = false;
  showUserMenu = false;
  @ViewChild('usermenu') userMenu!: ElementRef<any>;
  constructor(
    private mainService: MainServiceService,
    private router: Router,
    private r: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.darkTheme = this.mainService.darkTheme();
    this.user = this.mainService.getUserData();
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
  handleShowSearchMenu() {
    this.showSearchMenu = true;
    console.log(this.showSearchMenu, 'parent true');
  }
  HandleShowSearchMenu() {
    this.showSearchMenu = false;
    console.log(this.showSearchMenu, 'parent false');
  }
}
