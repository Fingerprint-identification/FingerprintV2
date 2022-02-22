import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-phone',
  templateUrl: './reset-phone.component.html',
  styleUrls: [
    './reset-phone.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class ResetPhoneComponent implements OnInit {

  constructor(
    private router:Router
  ) {}

  ngOnInit(): void {}
  ToGeneratePinCode(){
    this.router.navigate(['Login/reset-password-pin']);
  }
}
