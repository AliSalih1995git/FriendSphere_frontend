import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOnlineComponent } from './chat-online.component';

describe('ChatOnlineComponent', () => {
  let component: ChatOnlineComponent;
  let fixture: ComponentFixture<ChatOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
