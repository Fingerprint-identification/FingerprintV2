import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { SignupApiService } from './signup-api.service';

/**
 * @SignupService this services we send data from it to SignupServiceApi to
 * send the request and in this services we handle errors
 */
@Injectable({
  providedIn: 'root'
})

export class SignupService {
  private uploadedImg$ = new BehaviorSubject<boolean>(false);
  __uploadedImg$ = this.uploadedImg$.asObservable();
  checkTheLightCom : Subject<any> = new Subject();

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
  public makeValidationOf(name: string, validation: string): void {
    window.localStorage.setItem(name, validation);
  }
  /**
   * check the validation of the form if
   * valid => active submit button
   * invalid => make alert with error
   * @param name it's the name of the form like familyForm or userForm
   * @returns string => valid or invalid
   */
  public validationOf(name: string): string | null {
    return window.localStorage.getItem(name);
  }
  /**
   * this function save the data user entered to access it in the submmition button
   * to check if it's correct and completed or not
   * @param data data we want to save
   * @param name the name of the form
   * @returns void
   */
  public saveThisDataWithThisNameInCookies(data: any, name: string): void {
    this.cookieService.set(name, JSON.stringify(data));
  }
  /**
   * this function get the data user entered to access it in the submmition button
   * to check if it's correct and completed or not
   * @param name the name of the form
   * @returns any => data or false
   */
  public getThisDataWithThisNameFromCookies(name: string): any {
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
  public deleteThisDataWithThisNameFromCookies(name: string): void {
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
    this.deleteThisDataWithThisNameFromCookies("familyData");
    this.deleteThisDataWithThisNameFromCookies("userData");
    this.deleteThisDataWithThisNameFromCookies("diseases");
    this.deleteThisDataWithThisNameFromCookies("fingerprint");
    this.deleteThisDataWithThisNameFromCookies("familyProfile");
    this.deleteThisDataWithThisNameFromCookies("userInformation");
    this.deleteThisDataWithThisNameFromCookies("userUpdatedData");
    this.deleteThisDataWithThisNameFromCookies("loadingDiv");
    window.localStorage.clear();
  }

  /**
   * This function to handle errors
   * check if response has status success or not
   * @param response
   * @returns any => error or data as text()
   */
  public handler(response: any): any {
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
  async addUser(userData: any): Promise<any> {
    try {
      const response = await this.api.addUser(userData);
      return this.handler(response);
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }
  public getUserById(id: string) {
    this.api.getUserById(id).subscribe({
      next: (data) => {
        if (data.data.length !== 0) {
        this.deleteThisDataWithThisNameFromCookies("userInformation");
        this.saveThisDataWithThisNameInCookies(data.data, "userInformation");
        alert("User founded successfully");
        this.imgUploaded(false);
        this.router.navigate(['/Admin/profile']);
        }else{
          this.userNotFounded();
        }
      },
      error: (error: any) => {
        alert(error);
        this.imgUploaded(false);
        this.deleteThisDataWithThisNameFromCookies("userInformation");
        this.router.navigate(['/Admin/checkFingerprint']);
      }
    })
  }
  public getUserByNationalId(nationalId: string) {
    this.api.getUserByNationalId(nationalId).subscribe({
      next: (data) => {
        if (data.data.length !== 0) {
          this.deleteThisDataWithThisNameFromCookies("userInformation");
          this.saveThisDataWithThisNameInCookies(data.data[0], "userInformation");
          alert("User founded successfully");
          this.router.navigate(['/Admin/profile']);
        }
        else{
          this.userNotFounded();
        }
      },
      error: (error: any) => {
        alert(error);
        this.deleteThisDataWithThisNameFromCookies("userInformation");
        this.router.navigate(['/Admin/checkFingerprint']);
      }
    })
  }

  public deleteUserByNationalId(userId: string) {
    this.api.deleteUserByNationalId(userId).subscribe({
      next: (_) => {
        this.clearUserDataAfterSubmit();
        this.router.navigate(['/Admin/checkFingerprint']);
      },
      error: (error: any) => {
        alert(error);
        this.clearUserDataAfterSubmit();
        this.router.navigate(['/Admin/checkFingerprint']);
      }
    })
  }

  public updateUserById(id: string, updatedData: any): Observable<any> {
    return this.api.updateUserById(id, updatedData);
  }
  public imgUploaded(uploaded: boolean) {
    this.uploadedImg$.next(uploaded);
    this.saveThisDataWithThisNameInCookies(uploaded, "loadingDiv");
  }
  public checkImgUploaded() {
    return this.getThisDataWithThisNameFromCookies("loadingDiv");
  }
  public userNotFounded(){
    this.deleteThisDataWithThisNameFromCookies("userInformation");
    alert("Opps, User Not Founded!!");
    this.router.navigate(['/Admin/checkFingerprint']);
  }

}
