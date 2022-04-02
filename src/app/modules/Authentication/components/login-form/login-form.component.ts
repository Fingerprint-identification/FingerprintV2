import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.scss',
    '../../shared/global-style.component.scss',
  ],
})
export class LoginFormComponent implements OnInit {
  Loading: boolean = false;
  massegeError: string = '';
  Submited: boolean = false;

  LoginForm: FormGroup = new FormGroup({
    // validation of the range of characters that user should enter
    ID: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
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

    // if the fields is blank and if any of fields is invalid
    if (this.LoginForm.invalid){
      this.spinner.hide();
      return;
    }
    // if all things is true
    this.Auth.login(
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
        this.massegeError = "User not founded please, try again!";
        this.router.navigate(['/Login']);
      },
    });
  }

}
