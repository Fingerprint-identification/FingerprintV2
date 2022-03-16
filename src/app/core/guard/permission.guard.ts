import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private Token: TokenStorageService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.CheckInStorage(next);
  }
  canLoad(
    next: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.Token.GetUser() && this.Token.GetUser() === next.path?.toLocaleLowerCase())
      return true;
    return false;
  }

  CheckInStorage(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.Token.GetUser() && this.Token.GetUser() === next.data['role']) {
      return true;
    }
    else {
      alert("Opps, You Need to Sign in as Admin to access this page");
      this.router.createUrlTree(['/Login']);
      return false;
    }
  }
}
