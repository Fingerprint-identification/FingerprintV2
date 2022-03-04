import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
/**
 * User injectable
 */
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanActivateChild, CanLoad {

  /**
   *
   * @param TokenStorage token to access tokern services
   */
  constructor(private router: Router, private Token: TokenStorageService) { }

  /**
  * Decide if a route can be activated
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckInStorage();
  }

  /**
  * Decide if a route can be activated
  */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckInStorage();
  }

  /**
  * Decide if a route can be loaded
  */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckInStorage();
  }


  CheckInStorage(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.Token.GetUser() && this.Token.GetUser().roles == 'User')
      return true;
    else {
      this.router.createUrlTree(['/Login']);
      return false;
    }
  }
}
