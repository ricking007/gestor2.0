import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptProvider implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('dc_token')) {
      let headers = req.headers.append('Authorization', localStorage.getItem('dc_token'))
      const clone = req.clone({ headers, withCredentials: true })
      return next.handle(clone);
    }
    return next.handle(req);
  }

}

