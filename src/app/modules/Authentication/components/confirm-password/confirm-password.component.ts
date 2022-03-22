import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';
/**
 * Confirm password component
 */
@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss', '../../Global-style/global-style.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  MassegeError: string = '';
  Submited: boolean = false;
  match: boolean = true;

  ConfirmForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    newPassword: new FormControl('', [
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
  confirm() {
    this.Submited = true;

    this.spinner.show();

    if (this.ConfirmForm.invalid) {
      this.spinner.hide();
      return;
    }

    if (this.ConfirmForm.get('password')?.value !== this.ConfirmForm.get('newPassword')?.value) {
      this.match = false;
      this.spinner.hide();
      return;
    }

    this.match = true;

    this.Auth.Confirm(
      this.ConfirmForm.get('password')?.value,
      this.ConfirmForm.get('newPassword')?.value
    ).subscribe({
      next: (data) => {
        this.router.navigate(['/Login']);
        this.spinner.hide();
      },
      error: (_) => {
        this.spinner.hide();
        this.MassegeError = "Error occurred, try again!";
        this.router.navigate(['/Login']);
      },
    });
  }

  ConfirmError(control: string, error: string): any {
    return this.ConfirmForm.controls[control].hasError(error);
  }
}
