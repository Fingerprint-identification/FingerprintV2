import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, finalize, map, Observable, startWith, Subject, Subscription, switchMap, take, tap } from 'rxjs';

import { SearchService } from 'src/app/shared/services/search.service';

export interface city {
  name: string;
  latest: string;
}
/**
* The Home component
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SearchService]
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
  * Local reference of Banner margin when user not entered any input
  */
  BannerMarginBottom: boolean = false;
  /**
  * Local reference of Result of the search
  */
  cities$!: Observable<city[]>;
  Cities !: any[];

  loading: boolean = false;

  /**
  * Constructor
  * @param {SearchService} SearchServices connect with search service that get cities from api
  */
  constructor(private SearchServices: SearchService) { }

  private searchTerms = new Subject<string>();

  search(term: string) {
    this.searchTerms.next(term);
  }

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
    // check margin
    this.CheckMargin();

    this.cities$ = this.searchTerms.pipe(
      tap((_) => (this.loading = true)),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.SearchServices.searchCity(term)),
      tap((_) => (this.loading = false))
    );
    this.cities$.subscribe((value: any) => {
      this.Cities = value.results;
    });
  }
  /**
  * method to check if the result of cities is empty
  * to make margin bottom zero
  */
  CheckMargin(): void {
    // if (this.Cities.length == 0)
    //   this.BannerMarginBottom = false;
    // else
    //   this.BannerMarginBottom = true;
  }

  /**
  * trackByFn for trackBy in ngFor
  * @param {index: number, result: any} trackBy used in ngFor to search by index in dom
  * @returns number
  */
  trackByFn(index: number, result: any): number {
    return index;
  }

  /**
  * The "ngOnDestroy"
  */
  ngOnDestroy(): void {
  }

}
