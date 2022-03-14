import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

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

  /**
   * Constractor
   * @param router
   */

  constructor(
    private router:Router
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
  }
  /**
   * Method that navigate user to rest his password pin
   */
  ToGeneratePinCode(){
    this.router.navigate(['Login/pin-password']);
  }
}
