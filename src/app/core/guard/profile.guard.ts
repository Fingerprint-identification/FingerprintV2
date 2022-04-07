import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from 'src/app/modules/Administration/shared/services/signup.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate, CanLoad {
  constructor(private signUpServices: SignupService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (this.signUpServices.getThisDataWithThisNameFromCookies("userInformation") !== 'false') ? true : false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (this.signUpServices.getThisDataWithThisNameFromCookies("userInformation") !== 'false') ? true : false;
  }
}
