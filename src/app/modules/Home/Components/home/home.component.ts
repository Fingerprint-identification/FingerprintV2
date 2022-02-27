import { Component, OnDestroy, OnInit } from '@angular/core';

import { debounceTime, distinctUntilChanged, filter, Subject, Subscription } from 'rxjs';

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
  EnteredDataFromUserToFilter: Subject<string> = new Subject<string>();
  /**
  * Local reference of subscription to unsubscribe in distroy
  */
  Subscription !: Subscription;
  /**
  * Constructor
  * @param {SearchService} SearchServices connect with search service that get cities from api
  */
  constructor(private SearchServices: SearchService) {}

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
    this.CheckMargin();
    this.EnteredDataFromUserToFilter.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      filter(city => city.length > 0),
    ).subscribe(FilteredCity => {
      this.Loading = true;
      this.Subscription = this.SearchServices.SearchAboutCityInApi(FilteredCity).subscribe({
        next: (cities: any): void => {
          this.Loading = false;
          this.CitiesFetchedResult = cities.results;
        },
        error: (): void => {
          this.Loading = false;
        }
      });
    });
  }
  /**
  * Method for take the data user entered and send to
  * filter method to filter it and subscribe result
  * @param {City} City City User entered
  */
  TakeDataUserEntered(City: Event): void {
    if ((City.target as HTMLInputElement).value == '')
      this.CitiesFetchedResult = [];
    this.EnteredDataFromUserToFilter.next((City.target as HTMLInputElement).value);
  }

  /**
  * method to check if the result of cities is empty
  * to make margin bottom zero
  * @param {} CheckMargin City User entered
  */
  CheckMargin(): void{
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
    this.Subscription.unsubscribe();
  }
}
