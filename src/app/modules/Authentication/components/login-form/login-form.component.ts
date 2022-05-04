import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

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
  // Local reference to store the error message
  massegeError: string = '';
  // Local reference to check if it's submitted or not
  submited: boolean = false;
  // Local reference to store user phone
  loginForm !: FormGroup;
  /**
   * @param router to access some properities from router
   * @param spinner to access spinner
   */
  constructor(
    private Auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // Form validation
    this.loginForm = new FormGroup({
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
  }

  onSubmitLoggin() {
    // active the submmition
    this.submited = true;
    // active spinner
    this.spinner.show();
    // if the fields is blank and if any of fields is invalid
    if (this.loginForm.invalid) {
      this.spinner.hide();
      return;
    }
    // if all things is true
    this.Auth.login(
      this.loginForm.get('ID')?.value,
      this.loginForm.get('Password')?.value
    ).subscribe({
      next: (data) => {
        console.log(data.data)
        if (data.data.role == 'admin')
          this.router.navigate(['/Admin']);
        else if(data.data.role == 'user') {
          this.router.navigate(['/User']);
        }else if(data.data.role == 'owner') {
          this.router.navigate(['/Manager'])
        }
        this.spinner.hide();
      },
      error: (_) => {
        this.spinner.hide();
        this.massegeError = "User not founded please, try again!";
        this.router.navigate(['/Login']);
      },
    });
  }
}
