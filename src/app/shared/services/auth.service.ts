import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import { Observable, tap } from "rxjs";

import { ApiServicesService } from "./api-services.service";

import { TokenStorageService } from "./token-storage.service";

import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: "root",
})
export class AuthService {

    constructor(
        private TokenStorage: TokenStorageService,
        private api: ApiServicesService,
        private router: Router,
        private cookieService: CookieService
    ) {
    }

    Login(notional_id: number, password: number): Observable<any> {
        return this.api.Login(notional_id, password).pipe(
            tap((data: any) => {
                this.TokenStorage.SaveToken(data.token);
                this.TokenStorage.SaveUser(data.role)
            })
        );
    }
    GeneratePinCode(phone: string) {
        return this.api.GeneratePinCode(phone).pipe(
            tap((_) => {
                this.TokenStorage.SavePhoneNumber(phone);
                this.TokenStorage.SaveActivePin();
            })
        );
    }
    Pin(pin: number) {
        return this.api.Pin(pin).pipe(
            tap((data: any) => {
                this.TokenStorage.SaveActiveConfirm()
                this.TokenStorage.SaveToken(data.token);
            })
        );
    }
    Confirm(password: string, passwordConfirm: string) {
        return this.api.Confirm(password, passwordConfirm);
    }

    isLoggedin(): boolean {
        console.log("F", this.TokenStorage.GetToken() )
        if(this.TokenStorage.GetToken()){
            if(this.TokenStorage.GetUser())
                return true;
            return false;
        }
        return false;
    }
    SignOut(): void {
        this.cookieService.deleteAll();
        this.router.navigate(['/Home']);
    }
}
