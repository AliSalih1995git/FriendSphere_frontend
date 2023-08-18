import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css'],
})
export class SearchMenuComponent implements OnInit {
  @Output() setShowSearchMenu: EventEmitter<boolean> = new EventEmitter<any>();
  iconVisible = true;
  searchTerm = '';
  results: any;
  searchHistory: any[] = [];
  username: string = '';

  constructor(
    private homeService: HomeService,
    private mainService: MainServiceService
  ) {}

  ngOnInit(): void {
    const res = this.mainService.getUserData();
    this.username = res.username;
    this.getHistory();
  }

  getHistory(): void {
    this.homeService.getSearchHistory().subscribe((res) => {
      this.searchHistory = res;
    });
  }

  searchHandler(): void {
    if (this.searchTerm === '') {
      this.results = [];
    } else {
      this.homeService.search(this.searchTerm).subscribe({
        next: (res) => {
          this.results = res;
        },
        error: (err) => console.log(err),
      });
    }
  }

  addToSearchHistoryHandler(searchUser: any): void {
    this.homeService.addToSearchHistory(searchUser).subscribe(() => {
      this.getHistory();
    });
  }

  handleRemove(searchUser: any): void {
    this.homeService.removeFromSearch(searchUser).subscribe(() => {
      this.getHistory();
    });
  }

  showProfilePicture(): void {
    this.iconVisible = false;
  }

  onBlurInput(): void {
    this.iconVisible = true;
  }

  onClose(): void {
    this.setShowSearchMenu.emit();
  }

  trackByFn(index: number, item: any): any {
    return item._id;
  }

  orderByDate(array: any[]): any[] {
    return array.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}
