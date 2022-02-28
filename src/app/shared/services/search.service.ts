import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, of, Subject, switchMap, throwError } from 'rxjs';

/**
* Inject root
*/
@Injectable({
  providedIn: 'root'
})

/**
* Class for search services that geet cities from api
*/
export class SearchService {
  /**
  *  Local reference for url to get cities
  */
  baseUrl = 'https://api.cdnjs.com/libraries';
  /**
  * Search query to put in url
  */
  queryUrl = '?search=';

  /**
  * Constructor
  * @param http
  */
  constructor(private http: HttpClient) {
  }

  search(terms: Observable<string>): Observable<any>{
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(city => city.length > 0),
      switchMap((term: any) => this.SearchAboutCityInApi(term))
    );
  }

  /**
  *  search about city in api
  * @param City user entered
  * @returns Observable<any>
  */
  SearchAboutCityInApi(City: any): Observable<any>{
    return this.http.get(this.baseUrl + this.queryUrl + City);
  }

}

