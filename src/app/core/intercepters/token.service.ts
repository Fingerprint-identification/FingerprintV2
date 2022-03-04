import { Injectable, Injector } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

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

  /**
   * Constractor
   * @param TokenStorageService reference for token storage services page
   */
  constructor(private Token: TokenStorageService) { }
  /**
   * Intercepter
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * Local referance to inject auth services
     */
    let AuthReq = req;

    /**
     * Local referance that Get token
     */
    const Token = this.Token.GetToken();

    if (Token != null) {
      /**
      * Local referance to clone request
      */
      AuthReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, Token) })
    }
    return next.handle(AuthReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenIntercepterService, multi: true }
];
