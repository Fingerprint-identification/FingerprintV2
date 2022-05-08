import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SignupManagerApiService } from './signup-manager-api.service';

@Injectable({
  providedIn: 'root'
})
export class SignupManagerService {

  constructor(private cookieService: CookieService, private api: SignupManagerApiService, private router: Router) { }

  public clearCookies(): void {
    this.cookieService.delete('adminData');
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
  async addAdmin(adminData: any): Promise<any> {
    try {
      const response = await this.api.addAdmin(adminData);
      return this.handler(response);
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }
  public deleteAdmin(userId: string){
    this.api.deleteUserByNationalId(userId).subscribe({
      next: (_) => {
        alert("Admin deleted succefully")
        this.clearCookies();
        this.router.navigate(['/Owner/home']);
      },
      error: (error: any) => {
        alert(error);
        this.clearCookies();
        this.router.navigate(['/Owner/home/delete']);
      }
    })
  }

}
