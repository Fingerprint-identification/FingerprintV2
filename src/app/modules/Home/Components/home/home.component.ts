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
  * Local reference of cities as Observable
  */
  cities$!: Observable<city[]>;

  /**
   * Local reference contains the cities comming from api
   */
  Cities !: any[];

  /**
   * Local reference used for loading
   */
  loading: boolean = false;

  /**
   *
   * Local reference as Subject to store the input of the user
   */
   private searchTerms = new Subject<string>();

  /**
  * Constructor
  * @param {SearchService} SearchServices connect with search service that get cities from api
  */
  constructor(private SearchServices: SearchService) { }

  /**
   *
   * @param EnterdCity that user entered
   */
  search(EnteredCity: string): void{
    this.searchTerms.next(EnteredCity);
  }

  /**
  * The "ngOnInit"
  */
  ngOnInit(): void {
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
