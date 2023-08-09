import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css'],
})
export class DisplayPostComponent implements OnInit {
  @Input() post: any;
  @Input() user: any;
  visible: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  setPopupVisible(isVisible: boolean) {
    this.visible = isVisible;
  }
  getCleanImageUrl(urlWithQuotes: string): string {
    if (typeof urlWithQuotes === 'string') {
      return urlWithQuotes.replace(/"/g, '');
    }
    return '';
  }
}
