import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

import { AuthService } from '../../shared/services/auth.service';

/**
 * @ResetPinComponent Reset pin component we sent request to generate pin
 */
@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: [
    './reset-pin.component.scss',
    '../../shared/global-style.component.scss',
  ],
})
export class ResetPinComponent implements OnInit {
  // Local reference to store the error message
  massegeError: string = '';
  // Local reference to check if it's submitted or not
  submited: boolean = false;
  // Local reference to store user phone
  phone !: string;
  // Local reference to carry User Entered data
  pinForm !: FormGroup;
  /**
   * @param auth too access some login method from auth Service
   * @param router to access some properities from router
   * @param TokenStorage to access token methods
   * @param spinner to access spinner
   */
  constructor(
    private router: Router,
    private auth: AuthService,
    private TokenStorage: TokenStorageService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // get the number from token storage
    this.phone = this.TokenStorage.GetPhoneNumber();
    // Form validation
    this.pinForm = new FormGroup({
      Pin: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ])
    });
  }
  /**
   * ConfirmPage method will navigate user from pin password
   * to confirmation page
   * @returns void
   */
  confirmPage(): void {
    // active the submmition
    this.submited = true;
    // active spinner
    this.spinner.show();
    // if the fields is blank and if any of fields is invalid
    if (this.pinForm.invalid) {
      this.spinner.hide();
      return;
    }
    // Request
    this.auth.pin(this.pinForm.get('Pin')?.value).subscribe({
      next: (_) => {
        this.router.navigate(['Login/confirm-password']);
        this.spinner.hide();
      },
      error: (_) => {
        this.spinner.hide();
        this.massegeError = "opps, Pin isn't correct, try again!"
      },
    })
  }
}
