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
  MassegeError: string = '';

  ForgetForm: FormGroup = new FormGroup({
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
    private storageToken: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  ToGeneratePinCode() {
    this.Submited = true;
    this.spinner.show();
    if (this.ForgetForm.invalid)
      return;
    this.auth.GeneratePinCode(this.ForgetForm.get('Phone')?.value).subscribe({
      next: (_) => {
        this.storageToken.SaveActivePin();
        this.router.navigate(['Login/pin-password']);
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
        if (err.toString().includes('404')) {
          this.MassegeError = "Phone Not founded please, try again!"
        } else
          this.MassegeError = err.message;
        setTimeout(() => {
          this.router.navigate(['/Login/reset-password']);
        }, 2000)
      },
    })
    // this.router.navigate(['Login/pin-password']);
  }
  ForgetError(control: string, error: string): any {
    return this.ForgetForm.controls[control].hasError(error);
  }
}
