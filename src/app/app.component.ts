import { Component, OnDestroy, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";

/**
 * The App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  /**
  * Application main title
  */
  title: string = 'Fingerprint-v2';

  /** */
  constructor(private spinner: NgxSpinnerService) {
  }

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy(): void {
  }

}
