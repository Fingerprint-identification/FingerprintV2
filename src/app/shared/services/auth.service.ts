import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import { Observable, tap } from "rxjs";

import { ApiServicesService } from "./api-services.service";

import { TokenStorageService } from "./token-storage.service";

@Injectable({
    providedIn: "root",
})
export class AuthService {

    constructor(
        private TokenStorage: TokenStorageService,
        private api: ApiServicesService,
        private router: Router
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
    GeneratePinCode(phone: string){
        return this.api.GeneratePinCode(phone).pipe(
            tap((_) => {
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
        return (this.TokenStorage.GetToken()) ? true : false;
    }
    SignOut(): void {
        window.sessionStorage.clear();
        this.router.navigate(['/Home']);
    }
}
