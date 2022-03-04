import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
/**
 * Login component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../Global-style/global-style.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  /**
   * Local reference to check if logged
   */
  IsLoggedIn: boolean = false;

  /**
  * Local reference to check if logged failed
  */

  IsLoggidFailed: boolean = false;

  /**
  * Local reference to store error message
  */

  MassegeError: string = '';

  /**
  * Local reference to store roles
  */

  Roles: string[] = [];


  /**
  * Local reference to store roles
  */
    Submitted: boolean = false;
  /**
   * Login form
   */
  LoginForm: FormGroup = new FormGroup({
    ID: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  /**
   *
   * @param AuthServices auth services access auth services
   * @param TokenStorage token to access tokern services
   */
  constructor(private AuthServices: AuthService, private TokenStorage: TokenStorageService) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {

  }

  /**
   * Method take the data user logged with
   */
  OnSubmitLoggin() {
    this.Submitted = true;
    this.AuthServices.Login(this.LoginForm.get('ID')?.value, this.LoginForm.get('Password')?.value).subscribe({
      next: data => {
        this.TokenStorage.SaveToken(data.accessToken);
        this.TokenStorage.SaveUser(data);
        this.IsLoggedIn = true;
        this.IsLoggidFailed = false;
        this.Roles = this.TokenStorage.GetUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.MassegeError = err.error.message;
        this.IsLoggidFailed = true;
      }
    })
  }

  /**
   * Method that reload page
   */
  reloadPage(): void {
    window.location.reload();
  }

  /**
   * Check if there is error in form
   * @param control
   * @param error
   * @returns
   */
  LoginError(control: string, error: string): any{
    return this.LoginForm.controls[control].hasError(error);
  }
}
