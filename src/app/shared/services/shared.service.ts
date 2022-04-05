import { Injectable } from "@angular/core";

import { Router } from "@angular/router";



import { TokenStorageService } from "./token-storage.service";

import { CookieService } from 'ngx-cookie-service';



@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(
        private TokenStorage: TokenStorageService,
        private router: Router,
        private cookieService: CookieService
    ) {
    }


    signOut(): void {
        this.cookieService.deleteAll();
        window.localStorage.clear();
        this.router.navigate(['/Home']);
    }
    isLoggedin(): boolean {
        if (this.TokenStorage.GetToken()) {
            if (JSON.stringify(this.TokenStorage.GetUser()) !== '{}'){
                return true;
            }
            return false;
        }
        return false;
    }
}
