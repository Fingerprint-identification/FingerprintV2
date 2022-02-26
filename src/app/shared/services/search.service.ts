import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';

  constructor(private http: HttpClient) {
  }

  SearchAboutCityInApi(term: any): Observable<any>{
    return this.http.get(this.baseUrl + this.queryUrl + term);
  }

}

