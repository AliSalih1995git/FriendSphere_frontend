import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-your-post',
  templateUrl: './add-to-your-post.component.html',
  styleUrls: ['./add-to-your-post.component.css'],
})
export class AddToYourPostComponent implements OnInit {
  @Output() setShowPrev: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  showPreview(): void {
    this.setShowPrev.emit(true);
  }
}
