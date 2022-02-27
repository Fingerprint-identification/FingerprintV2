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
    throw new Error('Method not implemented.');
  }

  /**
  * The "constructor"
  */
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
