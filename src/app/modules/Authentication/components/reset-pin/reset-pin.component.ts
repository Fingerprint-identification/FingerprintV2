import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: [
    './reset-pin.component.scss',
    '../../Global-style/global-style.component.scss',
  ],
})
export class ResetPinComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {

  }
  ConfirmPage(): void{
    this.router.navigate(['Login/confirm-password']);
  }
}
