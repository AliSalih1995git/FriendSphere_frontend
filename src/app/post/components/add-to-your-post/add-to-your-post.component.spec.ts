import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToYourPostComponent } from './add-to-your-post.component';

describe('AddToYourPostComponent', () => {
  let component: AddToYourPostComponent;
  let fixture: ComponentFixture<AddToYourPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToYourPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToYourPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
