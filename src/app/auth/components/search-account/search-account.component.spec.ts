import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchAccountComponent } from './search-account.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../service/auth.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

describe('SearchAccountComponent', () => {
  let component: SearchAccountComponent;
  let fixture: ComponentFixture<SearchAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [SearchAccountComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // search Account test

  it('should send a POST request for searchAccount', () => {
    const email = 'ali@gmail.com';
    const expectedResponse = {
      success: true,
      user: {
        email: 'ali@gmail.com',
      },
    };
    const fixture = TestBed.createComponent(SearchAccountComponent);
    const component = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(AuthService);
    spyOn(service, 'searchAccount').and.returnValue(of(expectedResponse));
    const setUserInfosSpy = spyOn(component.setUserInfos, 'emit');
    const setVisibleSpy = spyOn(component.setVisible, 'emit');

    component.searchForm.get('email')?.setValue(email);
    component.handleSearch();

    expect(component.setLoading).toBe(false);
    expect(component.setError).toBe('');

    expect(setUserInfosSpy).toHaveBeenCalledWith(expectedResponse);
    expect(setVisibleSpy).toHaveBeenCalledWith(1);

    expect(service.searchAccount).toHaveBeenCalledWith(email);
  });
});
