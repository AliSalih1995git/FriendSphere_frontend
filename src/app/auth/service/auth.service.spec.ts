import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request for login', () => {
    const formData = { username: 'user', password: 'password' };
    const expectedResponse = { success: true };

    service.login(formData).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpTestingController.expectOne('/login');
    expect(req.request.method).toBe('POST');
    req.flush(expectedResponse);
  });
});
