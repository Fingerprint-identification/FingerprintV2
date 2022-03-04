import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local referance to carry api link
 */
const AUTH_API = "http://localhost:8080/api/auth/";

/**
 * Auth services injectable
 */
@Injectable({
    providedIn: 'root'
})
/**
 * Auth searvices class
 */
export class AuthService {
    /**
    * @param {Http} Http to access http services
    */
    constructor(private Http: HttpClient) {
    }

    /**
     * Sign in with ID/password
     * @param { ID } ID the id that user signin with it
     * @param { Password } Password that user signin with it
    */
    Login(ID: number, Password: string): Observable<any> {
        return this.Http.post(AUTH_API + 'signin', {
            ID,
            Password
        });
    }

    /*
        Returns true when user is looged in and email is verified
    */

    /*
        Reset Forggot password
    */

    /*
        Setting up user data when sign in with username/password,
    */

    /*
        Logout
    */
    
}
