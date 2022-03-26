import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private Token: TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // check about token
    if (this.Token.GetToken()) {
      request = this.AddToken(request, this.Token.GetToken()!);
    }
    return next.handle(request);
  }
  // add token to header
  private AddToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization':`Bearer ${token}`
      }
    });
  }
}
