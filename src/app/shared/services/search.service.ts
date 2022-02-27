import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { debounceTime, distinctUntilChanged, filter, map, Observable, Subject } from 'rxjs';
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

  /**
  *  search about city in api
  * @param term
  * @returns Observable<any>
  */
  SearchAboutCityInApi(City: any): Observable<any>{
    return this.http.get(this.baseUrl + this.queryUrl + City);
  }

}

