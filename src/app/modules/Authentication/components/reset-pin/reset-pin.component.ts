import { Component, OnInit } from '@angular/core';

import {Router } from '@angular/router';

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
  /**
   * Constractor
   * @param router
   */
  constructor(private router: Router) {}
  /**
   * ngOnInit
   */
  ngOnInit(): void {

  }
  /**
   * ConfirmPage is method to navigate user to confirm password
   */
  ConfirmPage(): void{
    this.router.navigate(['Login/confirm-password']);
  }
}
