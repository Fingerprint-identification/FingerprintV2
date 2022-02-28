import { Component, OnDestroy, OnInit } from '@angular/core';

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

  /**
  * The "constructor"
  */
  constructor() {
  }

  /**
  * The "constructor"
  */
  ngOnDestroy(): void {
  }

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
  }
}
