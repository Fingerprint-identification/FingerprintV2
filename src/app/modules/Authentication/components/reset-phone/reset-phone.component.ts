import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '../../shared/services/auth.service';

/**
 * Reset Phone password component
 */
@Component({
  selector: 'app-reset-phone',
  templateUrl: './reset-phone.component.html',
  styleUrls: [
    './reset-phone.component.scss',
    '../../shared/global-style.component.scss',
  ],
})
export class ResetPhoneComponent implements OnInit {
  // Local reference to store the error message
  massegeError: string = '';
  // Local reference to check if it's submitted or not
  submited: boolean = false;
  // Local reference to store user phone
  forgetForm !: FormGroup;
  /**
   * @param auth too access some login method from auth Service
   * @param router to access some properities from router
   * @param spinner to access spinner
   */
  constructor(
    private router: Router,
    private auth: AuthService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // Form validation
    this.forgetForm = new FormGroup({
      Phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ])
    });
  }
  /**
   * ToGeneratePinCode method will navigate user from phone page
   * to pin page
   * @returns void
   */
  ToGeneratePinCode() {
    // active the submmition
    this.submited = true;
    // active spinner
    this.spinner.show();
    // if the fields is blank and if any of fields is invalid
    if (this.forgetForm.invalid) {
      this.spinner.hide();
      return;
    }
    // Request
    this.auth.generatePinCode("0" + this.forgetForm.get('Phone')?.value).subscribe({
      next: (_) => {
        this.router.navigate(['Login/pin-password']);
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
        if (err.toString().includes('404')) {
          this.massegeError = "Phone Not founded please, try again!"
        } else
          this.massegeError = err.message;
        setTimeout(() => {
          this.router.navigate(['/Login/reset-password']);
        }, 2000)
      },
    })
  }
}
