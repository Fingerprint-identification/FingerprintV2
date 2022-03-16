import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, Event, NavigationStart } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
import { filter, map, mergeMap } from 'rxjs';

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
  // title: string = 'Fingerprint-v2';
  /** */
  constructor(private spinner: NgxSpinnerService, private router: Router,
    private activatedRoute: ActivatedRoute, private titleService: Title) {
  }
  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route: any) => route.outlet === "primary"),
        mergeMap((route: any) => route.data),
        map((data: any) => {
          if (data.title) {
            return data.title;
          } else {
            return "Default App Title";
          }
        })
      )
      .subscribe(pathString => this.titleService.setTitle(pathString));
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy(): void {
  }

}
