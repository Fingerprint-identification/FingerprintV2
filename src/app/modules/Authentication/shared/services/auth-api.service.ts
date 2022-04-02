import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const AUTH_API = `${environment.apiUrl}` + "api/users/";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  /**
   * @param Http to access properities from http
   */
  constructor(private Http: HttpClient) {
  }
  /**
   * Login method that take national id and password ands end to api
   * @param notional_id
   * @param password
   * @returns Observable
   */
  login(notional_id: number, password: number): Observable<any> {
    return this.Http.post(AUTH_API + 'login', {
      password,
      notional_id
    });
  }
  /**
   * this methed send phone to api to generate pin
   * @param phone the user phone
   * @returns  Observable<any>
   */
  generatePinCode(phone: string): Observable<any> {
    return this.Http.post(AUTH_API + 'forgotpassword', {
      phone
    });
  }
  /**
   * this methed send code to api to allow change password
   * @param code the user pin code
   * @returns  Observable<any>
   */
  pin(code: number) {
    return this.Http.post(AUTH_API + 'resetPassword', {
      code
    });
  }
  /**
   * method that send the confirm password and password to api
   * @param password
   * @param passwordConfirm
   * @returns Observable<any>
   */
  confirm(password: string, passwordConfirm: string) {
    return this.Http.patch(AUTH_API + 'updateForgotPassword', {
      password,
      passwordConfirm
    });
  }

  /**
   * get user by id
   * @param id
   * @returns Observable
   */
  getUserById(id: number): Observable<any> {
    return this.Http.get(AUTH_API + 'login/' + id);
  }
}
