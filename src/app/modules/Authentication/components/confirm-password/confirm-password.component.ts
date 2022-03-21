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
  Loading: boolean = false;
  MassegeError: string = '';
  Submited: boolean = false;
  match: boolean = true;
  ConfirmForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

 constructor(
  private Auth: AuthService,
  private router: Router,
  private spinner: NgxSpinnerService,
  ) { }
  /**
   * ngOnInit
   */
  ngOnInit(): void {

  }
  confirm(){
    this.Submited = true;
    this.spinner.show();
    if(this.ConfirmForm.invalid)
      return;
    if(this.ConfirmForm.get('password')?.value !== this.ConfirmForm.get('newPassword')?.value){
      this.match = false;
      return;
    }
    this.match = true;
    this.Auth.Login(
      this.ConfirmForm.get('password')?.value,
      this.ConfirmForm.get('newPassword')?.value
    ).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/Login']);
        this.spinner.hide();
      },
      error: (err) => {
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
