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
   

    isLoggedin(): boolean {
        if (this.TokenStorage.GetToken()) {
            if (this.TokenStorage.GetUser())
                return true;
            return false;
        }
        return false;
    }
}
