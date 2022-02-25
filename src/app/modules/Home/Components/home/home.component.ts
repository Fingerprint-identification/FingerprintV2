import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, Subject } from 'rxjs';
import { FilterPipe } from 'src/app/core/custom-pipe/filter.pipe';
import { city } from 'src/app/core/models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[FilterPipe]
})
export class HomeComponent implements OnInit {
  banner_margin_bottom: boolean = false;
  SearchCity = '';
  CitiesExist !: boolean;

  trackByFn(index: number, device: city) {
    return index;
  }

  loading !: boolean;
  searchTerm = new Subject<string>();
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';
  searchResult : Array<{name: string, latest: string}> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.searchTerm.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      filter(term => term.length > 0),
    ).subscribe(searchterm => {
      this.loading = true;
      this._searchEntries(searchterm);
    });
    /* margin when no devices selected */
    if (this.searchResult.length == 0) this.banner_margin_bottom = true
  }
  searchEntries(term: any): Observable<any>{
    return this.http.get(this.baseUrl + this.queryUrl + term).pipe(
      map((response: any) => {
        this.searchResult = response.results;

      })
    )
  }
  _searchEntries(term: any){
    this.searchEntries(term).subscribe({
      next: () => {this.loading = false;},
      error: () => {this.loading = false;}
    })
  }
  onInput(e: any){
    console.log(e.target.value)
    this.searchTerm.next(e.target.value);
  }

}
