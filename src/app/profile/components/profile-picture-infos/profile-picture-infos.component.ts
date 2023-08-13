import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-picture-infos',
  templateUrl: './profile-picture-infos.component.html',
  styleUrls: ['./profile-picture-infos.component.css'],
})
export class ProfilePictureInfosComponent implements OnInit {
  @Input() profile: any;
  constructor() {}

  ngOnInit(): void {}
}
