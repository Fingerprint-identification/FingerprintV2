import { Injectable } from '@angular/core';

/**
 * Local referance that store the token key 
 */
const TOKEN_KEY = 'auth-token'

/**
 * Local referance that store auth user key
 */
const USER_KEY = 'auth-user'

/**
 * Inject token storage
 */
@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    /**
     * Constractor
     */
    constructor() { }

    /**
     * Method that clear storage when signout
     */
    SignOut(): void {
        window.sessionStorage.clear();
    }

    /**
     * 
     * @param Token the token of the user to store in session
     */
    public SaveToken(Token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, Token);
    }
    /**
     * Method that get the token from session
     */

    public GetToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    };

    /**
     * 
     * @param user user data and store it in session
     */
    public SaveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    /**
     * Method that get user from session
     */
    public GetUser(): any{
        const user = window.sessionStorage.getItem(USER_KEY);
        if(user){
            return JSON.parse(user);
        }
        return {};
    }
}
