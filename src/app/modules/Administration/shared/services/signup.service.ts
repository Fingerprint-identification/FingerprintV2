import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

import { SignupApiService } from './signup-api.service';

/**
 * @SignupService this services we send data from it to SignupServiceApi to
 * send the request and in this services we handle errors
 */
@Injectable({
  providedIn: 'root'
})

export class SignupService {
  /**
   * @param api access functions in SignupApiService
   * @param cookieService access cookies to add data form in it and from it
   */
  constructor(private api: SignupApiService, private cookieService: CookieService, private router: Router) { }

  /**
   * This method add family and user forms as valid or invalid
   * @param name it's the name of the form like familyForm or userForm
   * @param validation this is what we need valid or invalid
   * @returns void => nothing
   */
  public validationChecker(name: string, validation: string): void {
    window.localStorage.setItem(name, validation);
  }
  /**
   * check the validation of the form if
   * valid => active submit button
   * invalid => make alert with error
   * @param name it's the name of the form like familyForm or userForm
   * @returns string => valid or invalid
   */
  public getValidationChecker(name: string): string | null {
    return window.localStorage.getItem(name);
  }
  /**
   * this function save the data user entered to access it in the submmition button
   * to check if it's correct and completed or not
   * @param data data we want to save
   * @param name the name of the form
   * @returns void
   */
  public saveUserSignUpData(data: any, name: string): void {
    this.cookieService.set(name, JSON.stringify(data));
  }
  /**
   * this function get the data user entered to access it in the submmition button
   * to check if it's correct and completed or not
   * @param name the name of the form
   * @returns any => data or false
   */
  public getUserSignUpData(name: string): any {
    const data = this.cookieService.get(name);
    if (data) {
      return JSON.parse(data);
    }
    return "false";
  }

  /**
   * This function make the form submitted or not when
   * admin click submit button
   * @param value it was token as true or false
   * @returns void
   */
  public makeformSubmitted(value: string): void {
    window.localStorage.setItem("submited", value);
  }
  /**
   * This function return the form submitted or not when
   * admin click submit button
   * @returns string or null
   */
  formSubmitted(): string | null {
    return window.localStorage.getItem("submited");
  }
  /**
   * This function delete any signUp data stored in cookies
   * you need
   * @param name the name of what you need to delete
   * @returns void
   */
  public deleteUserSignUpData(name: string): void {
    this.cookieService.delete(name);
  }
  /**
   * this function save user Diseases that entered to access it when we send
   * data to api
   * @param diseases this's diseases what user enterd
   * @param name the form name of this diseases
   * @returns void
   */
  public saveDiseases(diseases: string[], name: string): void {
    this.cookieService.set(name, JSON.stringify(diseases));
  }
  /**
  * this function returns user Diseases that entered to access it when we send
  * data to api
  * @param name the form name of this diseases
  * @returns any
  */
  public getDiseases(name: string): any {
    const Diseases = this.cookieService.get(name);
    if (Diseases) {
      return JSON.parse(Diseases);
    }
    return [];
  }
  /**
   * this function to clear all data in cookies to add
   * new user
   * @returns void
   */
  public clearUserDataAfterSubmit(): void {
    this.cookieService.delete("familyData");
    this.cookieService.delete("userData");
    this.cookieService.delete("diseases");
  }

  /**
   * This function to handle errors
   * check if response has status success or not
   * @param response
   * @returns any => error or data as text()
   */
  handler(response: any): any {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.text();
  }
  /**
   * this function takes user data and sent it to api services
   * @param userData
   * @returns Promise<any>
   */
  async sendUserData(userData: any): Promise<any> {
    try {
      const response = await this.api.sendUserData(userData);
      return this.handler(response);
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }
  getUserById(id: string) {
    this.api.getUserById(id).subscribe({
      next: (data) => {
        this.saveUserSignUpData(data, "userInformation");
      },
      error: (_) => {
        alert("User not founded please, try again!");
        this.router.navigate(['/Admin/checkFingerprint']);
      }
    })
  }
}
