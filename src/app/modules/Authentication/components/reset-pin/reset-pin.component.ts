import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: [
    './reset-pin.component.scss',
    '../../shared/global-style.component.scss',
  ],
})
export class ResetPinComponent implements OnInit {
  Submited: boolean = false;
  massegeError: string = '';
  phone !: string;

  // validation of the range of characters that user should enter
  PinForm: FormGroup = new FormGroup({
    Pin: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ])
  });

  constructor(private router: Router, private auth: AuthService, private TokenStorage: TokenStorageService,
    private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.phone = this.TokenStorage.GetPhoneNumber();
    console.log(this.phone)
  }

  ConfirmPage(): void {
    this.Submited = true;

    this.spinner.show();

    // if the fields is blank and if any of fields is invalid
    if (this.PinForm.invalid){
      this.spinner.hide();
      return;
    }

    // if all things is true
    this.auth.Pin(this.PinForm.get('Pin')?.value).subscribe({
      next: (data: any) => {
        this.router.navigate(['Login/confirm-password']);
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
        this.massegeError = "opps, Pin isn't correct, try again!"
      },
    })
  }
}
