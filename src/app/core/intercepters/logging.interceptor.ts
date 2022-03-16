import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { MessengerService } from 'src/app/shared/services/messenger.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private messenger: MessengerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const staredtTime = Date.now();
    let ok !: string;
    return next.handle(request).pipe(
      tap({
        next: (event) => (ok = event instanceof HttpResponse? 'succeeded' : ''),
        error: (error) => (ok = 'faild')
      }),
      finalize(() => {
        const timeSpent = staredtTime - Date.now();
        const msg = `${request.method} "${request.urlWithParams}"
             ${ok} in ${timeSpent} ms.`;
          this.messenger.commingMessage(msg);
      })
    )
  }
}
