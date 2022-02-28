import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { debounceTime, distinctUntilChanged, filter, map, Observable, Subject, Subscription, switchMap, take, tap } from 'rxjs';

import { SearchService } from 'src/app/shared/services/search.service';

/**
* The Home component
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  /**
  * Local reference of Banner margin when user not entered any input
  */
  BannerMarginBottom: boolean = false;
  /**
  * Local reference of Loading while fetching data
  */
  Loading!: boolean;
  /**
  * Local reference of Result of the search
  */
  CitiesFetchedResult: Array<{ name: string, latest: string }> = [];
  /**
  * Local Subject of taken data from user to filter
  */
  EnteredDataFromUserToFilter$ = new Subject<string>();
  /**
  * Constructor
  * @param {SearchService} SearchServices connect with search service that get cities from api
  */
  constructor(private SearchServices: SearchService) { }

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
    // check margin
    this.CheckMargin();
    this.SearchServices.search(this.EnteredDataFromUserToFilter$).subscribe((res: any)=>{
      this.CitiesFetchedResult = res.results;
    });
  }

  /**
  * method to check if the result of cities is empty
  * to make margin bottom zero
  */
  CheckMargin(): void {
    if (this.CitiesFetchedResult.length == 0)
      this.BannerMarginBottom = false;
    else
      this.BannerMarginBottom = true;
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
