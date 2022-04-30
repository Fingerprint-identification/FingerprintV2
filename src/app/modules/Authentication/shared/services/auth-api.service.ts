import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { Observable, tap } from 'rxjs';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

import { environment } from 'src/environments/environment';

const AUTH_API = `${environment.apiUrl}` + "api/v1/auth/";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  /**
   * @param Http to access properities from http
   */
  constructor(private Http: HttpClient, private token: TokenStorageService) {
  }
  /**
   * Login method that take national id and password ands end to api
   * @param national_id
   * @param password
   * @returns Observable
   */
  login(national_id: number, password: number): Observable<any> {
    return this.Http.post(AUTH_API + 'login', {
      password,
      national_id
    });
  }
  /**
   * this methed send phone to api to generate pin
   * @param phone the user phone
   * @returns  Observable<any>
   */
  generatePinCode(phone: string): Observable<any> {
    return this.Http.post(AUTH_API + 'forgotPassword', {
      phone
    });
  }
  /**
   * this methed send code to api to allow change password
   * @param code the user pin code
   * @returns  Observable<any>
   */
  pin(resetCode: number) {
    return this.Http.post(AUTH_API + 'verifyResetCode', {
      resetCode
    });
  }
  /**
   * method that send the confirm password and password to api
   * @param newPassword
   * @param passwordConfirm
   * @returns Observable<any>
   */
  confirm(newPassword: string, passwordConfirm: string): Observable<any> {
    let body = {
      newPassword,
      passwordConfirm
    };
    return this.Http.put(AUTH_API + 'resetPassword', body)
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
