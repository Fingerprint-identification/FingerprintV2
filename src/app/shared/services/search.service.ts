import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';
  searchTerm = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  searchEntries(term: any){
    return this.http.get(this.baseUrl + this.queryUrl + term);
  }

  _searchEntries(term: any){
    return this.searchEntries(term);
  }

}
