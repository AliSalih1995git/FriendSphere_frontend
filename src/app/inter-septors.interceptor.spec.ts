import { TestBed } from '@angular/core/testing';

import { InterSeptorsInterceptor } from './inter-septors.interceptor';

describe('InterSeptorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterSeptorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterSeptorsInterceptor = TestBed.inject(InterSeptorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
