import { Injectable, Injector } from '@angular/core';

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BehaviorSubject, catchError, filter, finalize, Observable, switchMap, take, throwError } from 'rxjs';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AuthService } from 'src/app/shared/services/auth.service';

/**
 * Local referance for Token header key
 */
const TOKEN_HEADER_KEY = 'x-access-token';

/**
 * Token Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  private refreshTokenInProgress: boolean = false;
  private refreshTokenSubject = new BehaviorSubject(null);

  constructor(private Token: TokenStorageService, private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let AuthReq = req;

    AuthReq = AuthReq.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    const Token = this.Token.GetToken();
    if (Token) {
      AuthReq = AuthReq.clone({
        setHeaders: {
          Authorization: `Bearer ${Token}`,
        }
      })
    }
    return next.handle(AuthReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenIntercepterService, multi: true }
];
