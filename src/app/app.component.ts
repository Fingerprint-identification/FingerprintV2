import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    private activatedRoute: ActivatedRoute, private titleService: Title, private meta: Meta) {
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
            return "Fingerprint";
          }
        })
      )
      .subscribe(pathString => this.titleService.setTitle(pathString));
    this.meta.addTags([
      { name: 'keywords', content: 'Fingerprint, Footprint, missing, person, child, emergency, Authentication, qrcode' },
      { name: 'description', content: 'Fingerprint Authentication is a service that use fingerprint as a unique ID for you. With service you can find a person in short time or help you in emergency situations. ' },
      { name: 'robots', content: 'noindex, nofollow' },
      { name: `auther`, content: `Hatem Bassem` },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { name: 'date', content: '2022-01-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy(): void {
  }

}
