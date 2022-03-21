import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';

/**
 * Reset pin password component
 */
@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: [
    './reset-pin.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class ResetPinComponent implements OnInit {
  Submited: boolean = false;
  MassegeError: string = '';

  PinForm: FormGroup = new FormGroup({
    Pin: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ])
  });

  constructor(private router: Router, private auth: AuthService,
    private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {

  }

  ConfirmPage(): void {
    this.Submited = true;
    this.spinner.show();
    if (this.PinForm.invalid)
      return;
    this.auth.Pin(this.PinForm.get('Pin')?.value).subscribe({
      next: (_) => {
        this.router.navigate(['Login/confirm-password']);
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
        if (err.toString().includes('404')) {
          this.MassegeError = "opps, Pin isn't correct, try again!"
        } else
          this.MassegeError = err.message;
        setTimeout(() => {
          this.router.navigate(['/Login/pin-password']);
        }, 2000)
      },
    })

  }
  PinError(control: string, error: string): any {
    return this.PinForm.controls[control].hasError(error);
  }
}
