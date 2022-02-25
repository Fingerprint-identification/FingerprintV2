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
  devices: city[] = [
    {
      address: 'Portsaid, Second area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
    {
      address: 'Elshrqia, First area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
    {
      address: 'Elshrqia, Second area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
    {
      address: 'Ismailia, First area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
    {
      address: 'Ismailia, Second area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
    {
      address: 'Ismailia, Third area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
  ];
  trackByFn(index: number, device: city) {
    return index;
  }

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
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
      this.loading.emit(true);
      this._searchEntries(searchterm);
    });
    /* margin when no devices selected */
    if (this.devices.length == 0) this.banner_margin_bottom = true
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
      next: () => {this.loading.emit(false);},
      error: () => {this.loading.emit(false);}
    })
  }
  onInput(e: any){
    console.log(e.target.value)
    this.searchTerm.next(e.target.value);
  }

}
