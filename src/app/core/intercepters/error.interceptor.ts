import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let message: any = error;
        if (error.error instanceof ErrorEvent) {
          // handle client-side error
          message = `${error.error.message}`;
        } else {
          // handle server-side error
          message = `${error.message}`;
        }
        return throwError(() => new Error(message));
      })
    )
  }
}
