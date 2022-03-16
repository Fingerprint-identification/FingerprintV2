import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/shared/services/api-services.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class LoginFormComponent implements OnInit {
  IsLoggedIn: boolean = false;
  IsLoggidFailed: boolean = false;
  MassegeError: string = '';
  Submitted: boolean = false;

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
    private router: Router
  ) { }

  ngOnInit(): void { }

  OnSubmitLoggin() {
    this.Submitted = true;
    this.Auth.Login(
      this.LoginForm.get('ID')?.value,
      this.LoginForm.get('Password')?.value
    ).subscribe({
      next: (data) => {
        if (data.userData.role == 'admin') {
          this.router.navigate(['/Admin']);
        }
        else this.router.navigate(['/User']);
      },
      error: (err) => {
        this.router.navigate(['/Login']);
      },
    });
  }

  LoginError(control: string, error: string): any {
    return this.LoginForm.controls[control].hasError(error);
  }
}
