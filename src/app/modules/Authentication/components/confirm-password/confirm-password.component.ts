import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '../../shared/services/auth.service';

/**
 * @ConfirmPasswordComponent Confirm password component that we change the password
 * and check if password === confirm password
 */
@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss', '../../shared/global-style.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  // Local reference to store the error message
  massegeError: string = '';
  // Local reference to check if it's submitted or not
  submited: boolean = false;
  // Local reference to check the match of password and confirmation
  match: boolean = true;
  // Local reference to carry User Entered data
  confirmForm !: FormGroup;

  /**
   * @param auth too access some login method from auth Service
   * @param router to access some properities from router
   * @param spinner to access spinner
   */
  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // Form validation
    this.confirmForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  /**
   * confirmation method we check if user logged in successfully or not
   * @returns void
   */
  confirm(): void {
    // active the submmition
    this.submited = true;
    // active spinner
    this.spinner.show();
    // check the form validation
    if (this.confirmForm.invalid) {
      this.spinner.hide();
      return;
    }
    // check the match between password and confirmation password
    if (this.confirmForm.get('password')?.value !== this.confirmForm.get('newPassword')?.value) {
      this.match = false;
      this.spinner.hide();
      return;
    }
    // active the match successfully
    this.match = true;
    // request
    this.auth.confirm(
      this.confirmForm.get('password')?.value,
      this.confirmForm.get('newPassword')?.value
    ).subscribe({
      next: (_) => {
        this.router.navigate(['/Login']);
        this.spinner.hide();
      },
      error: (_) => {
        this.spinner.hide();
        this.massegeError = "Error occurred, try again!";
        this.router.navigate(['/Login']);
      },
    });
  }
}
