import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { Observable, tap } from 'rxjs';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

import { AuthApiService } from './auth-api.service';

/**
 * @AuthService we send login, signout, generate passwored
 * in this component
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * @param TokenStorage to access token
   * @param api to access AuthApiService to send request
   * @param router to access proprities from router
   * @param cookieService to access cookies to add in it
   */
  constructor(
    private TokenStorage: TokenStorageService,
    private api:AuthApiService,
    private router: Router,
    private cookieService: CookieService
  ) {
  }

  /**
   * Login method that take national id and password ands end to api
   * and store token in storage
   * @param notional_id
   * @param password
   * @returns Observable
   */
  login(notional_id: number, password: number): Observable<any> {
    return this.api.Login(notional_id, password).pipe(
      tap((data: any) => {
        this.TokenStorage.SaveToken(data.token);
      })
    );
  }
  /**
   * this methed we user to generate pin code
   * here we active that pin sent in cookies
   * to active the page of the pin code to
   * display to user (guard)
   * @param phone the user phone
   * @returns  Observable<any>
   */
  generatePinCode(phone: string): Observable<any> {
    return this.api.GeneratePinCode(phone).pipe(
      tap((_) => {
        this.TokenStorage.SavePhoneNumber(phone);
        this.TokenStorage.SaveActivePin();
      })
    );
  }
  /**
   * this method we use to send the pin typed from user
   * and active pin sent to active confirmation
   * page to display to user (guard)
   * @param pin
   * @returns  Observable<any>
   */
  pin(pin: number): Observable<any>{
    return this.api.Pin(pin).pipe(
      tap((data: any) => {
        this.TokenStorage.SaveActiveConfirm()
        this.TokenStorage.SaveToken(data.token);
        console.log(data.token);
      })
    );
  }
  /**
   * method that send the confirm password and password to api
   * @param password
   * @param passwordConfirm
   * @returns Observable<any>
   */
  confirm(password: string, passwordConfirm: string): Observable<any>{
    return this.api.Confirm(password, passwordConfirm);
  }

}
