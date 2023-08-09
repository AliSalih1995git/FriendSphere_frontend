import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterSeptorsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BackendUrl: string = environment.backendUrl;
    const localstorageData = localStorage.getItem('user');
    if (localstorageData) {
      const { token } = JSON.parse(localstorageData);

      if (token) {
        const newRequest = request.clone({
          url: `${BackendUrl}${request.url}`,
          setHeaders: { Authorization: `Bearer ${token}` },
        });
        console.log(newRequest, 'Token');
        return next.handle(newRequest);
      }
    }

    const newRequest = request.clone({
      url: `${BackendUrl}${request.url}`, // Add the base URL
    });
    return next.handle(newRequest);
  }
}
