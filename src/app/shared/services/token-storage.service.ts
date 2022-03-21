import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'


@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private router: Router,  private cookieService: CookieService) { }

    public SaveToken(Token: string): void {
        this.cookieService.delete(TOKEN_KEY);
        this.cookieService.set(TOKEN_KEY, Token);
    }

    public SaveActivePin(): void {
        this.cookieService.delete("Pin");
        this.cookieService.set("Pin", "true");
    }

    public returnActivePin(): string|null {
        return this.cookieService.get("Pin");
    }

    public SaveActiveConfirm(): void {
        this.cookieService.delete("Confirm");
        this.cookieService.set("Confirm", "true");
        this.cookieService.delete("Pin");
    }

    public returnActiveConfirm(): string|null {
        return this.cookieService.get("Confirm");
    }

    public GetToken(): string | null {
        return this.cookieService.get(TOKEN_KEY);
    };

    public SaveUser(user: any): void {
        this.cookieService.delete(USER_KEY);
        this.cookieService.set(USER_KEY, JSON.stringify(user));
    }

    public GetUser(): any {
        const user = this.cookieService.get(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
