import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'


@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private router: Router) { }

    public SaveToken(Token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, Token);
    }

    public SaveActivePin(): void {
        window.sessionStorage.removeItem("Pin");
        window.sessionStorage.setItem("Pin", "true");
    }

    public returnActivePin(): string|null {
        return window.sessionStorage.getItem("Pin");
    }

    public SaveActiveConfirm(): void {
        window.sessionStorage.removeItem("Confirm");
        window.sessionStorage.setItem("Confirm", "true");
        window.sessionStorage.removeItem("Pin");
    }

    public returnActiveConfirm(): string|null {
        return window.sessionStorage.getItem("Confirm");
    }

    public GetToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    };

    public SaveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public GetUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
