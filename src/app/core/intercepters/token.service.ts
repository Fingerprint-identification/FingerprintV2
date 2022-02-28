import { Injectable, Injector } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../../modules/Authentication/services/authentication.service';

/**
 * Token Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  /**
   * Constractor
   * @param injector
   */
  constructor(private injector: Injector) { }
  /**
   * Intercepter
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * Local referance to inject auth services
     */
    let AuthServices = this.injector.get(AuthenticationService)
    /**
     * Local referance to clone request
     */
    let TokenizedReq = req.clone({
      setHeaders:{
        // Authorization: `Bearer ${AuthServices.getToken()}`
      }
    })
    return next.handle(TokenizedReq);
  }
}
