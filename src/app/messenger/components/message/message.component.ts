import { Component, Input, OnInit } from '@angular/core';
import { format } from 'timeago.js';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() message: any;
  @Input() own!: boolean;

  formatTimestamp(timestamp: number): string {
    return format(timestamp);
  }
}
