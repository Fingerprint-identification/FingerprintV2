import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanLoad, UrlTree, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate, CanLoad {
  constructor(private tokenStorage: TokenStorageService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.activated();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.activated();
  }
  activated(): boolean {
    if (this.tokenStorage.returnActiveConfirm())
      return true;
    return false;
  }

}
