import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureInfosComponent } from './profile-picture-infos.component';

describe('ProfilePictureInfosComponent', () => {
  let component: ProfilePictureInfosComponent;
  let fixture: ComponentFixture<ProfilePictureInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePictureInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePictureInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
