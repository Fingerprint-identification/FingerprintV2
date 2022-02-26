import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';
import { FilterPipe } from 'src/app/core/custom-pipe/filter.pipe';
import { city } from 'src/app/core/models/city';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FilterPipe]
})
export class HomeComponent implements OnInit {
  banner_margin_bottom: boolean = false;
  loading !: boolean;
  errors: any = [];
  searchTerm = new Subject<string>();
  searchResult: Array<{ name: string, latest: string }> = [];

  constructor(private http: HttpClient, private searchServices: SearchService) {
  }

  ngOnInit(): void {
    this.searchTerm.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      filter(term => term.length > 0),
    ).subscribe(searchterm => {
      this.loading = true;
      this.searchServices._searchEntries(searchterm).subscribe(
        {
          next: (response: any) => {
            this.loading = false;
            this.searchResult = response.results;
          }, error: (error: any) => {
            this.errors = error;
            this.loading = false;
          }
        });
      /* margin when no devices selected */
      if (this.searchResult.length == 0)
        this.banner_margin_bottom = true
    })
  }
  onInput(e: any) {
    if(e.target.value == '')
      this.searchResult = [];
    this.searchTerm.next(e.target.value);
  }

  trackByFn(index: number, device: city) {
    return index;
  }

}
