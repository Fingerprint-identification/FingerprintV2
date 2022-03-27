import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

/**
 * Reset Phone password component
 */
@Component({
  selector: 'app-reset-phone',
  templateUrl: './reset-phone.component.html',
  styleUrls: [
    './reset-phone.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class ResetPhoneComponent implements OnInit {
  Submited: boolean = false;
  massegeError: string = '';

  ForgetForm: FormGroup = new FormGroup({
    // validation of the range of characters that user should enter
    Phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ])
  });

  constructor(
    private router: Router,
    private auth: AuthService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  ToGeneratePinCode() {
    this.Submited = true;
    this.spinner.show();

    // if the fields is blank and if any of fields is invalid
    if (this.ForgetForm.invalid){
      this.spinner.hide();
      return;
    }

    // if all things is true
    this.auth.GeneratePinCode(this.ForgetForm.get('Phone')?.value).subscribe({
      next: (data) => {
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
