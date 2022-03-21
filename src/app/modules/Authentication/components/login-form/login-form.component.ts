import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class LoginFormComponent implements OnInit {
  Loading: boolean = false;
  MassegeError: string = '';
  Submited: boolean = false;

  LoginForm: FormGroup = new FormGroup({
    ID: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private Auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  OnSubmitLoggin() {
    this.Submited = true;
    this.spinner.show();
    if(this.LoginForm.invalid)
      return;
    this.Auth.Login(
      this.LoginForm.get('ID')?.value,
      this.LoginForm.get('Password')?.value
    ).subscribe({
      next: (data) => {
        if (data.role == 'admin')
          this.router.navigate(['/Admin']);
        else {
          this.router.navigate(['/User']);
        }
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
        this.MassegeError = "User not founded please, try again!";
        this.router.navigate(['/Login']);
      },
    });
  }

  LoginError(control: string, error: string): any {
    return this.LoginForm.controls[control].hasError(error);
  }
}
