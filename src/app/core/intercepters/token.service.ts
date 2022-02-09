import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../modules/Authentication/services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authServices = this.injector.get(AuthenticationService)
    let tokenizedReq = req.clone({
      setHeaders:{
        //Authorization: `Bearer ${authServices.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
