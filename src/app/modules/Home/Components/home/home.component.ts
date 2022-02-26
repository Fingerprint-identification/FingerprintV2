import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject, Subscription } from 'rxjs';
import { FilterPipe } from 'src/app/core/custom-pipe/filter.pipe';
import { city } from 'src/app/core/models/city';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FilterPipe]
})
export class HomeComponent implements OnInit, OnDestroy {
  banner_margin_bottom: boolean = false;
  loading !: boolean;
  CitiesFetchedResult: Array<{ name: string, latest: string }> = [];
  EnteredDataFromUserToFilter = new Subject<string>();
  subscription !: Subscription;

  constructor(private SearchServices: SearchService) {
  }

  ngOnInit(): void {
    this.CheckMargin();
    this.EnteredDataFromUserToFilter.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      filter(city => city.length > 0),
    ).subscribe(FilteredCity => {
      this.loading = true;
      this.subscription = this.SearchServices.SearchAboutCityInApi(FilteredCity).subscribe({
        next: (cities: any) => {
          this.loading = false;
          this.CitiesFetchedResult = cities.results;
        },
        error: () => {
          this.loading = false;
        }
      });
    });
  }

  TakeDataUserEntered(City: Event): void{
    if ((City.target as HTMLInputElement).value == '')
      this.CitiesFetchedResult = [];
    this.EnteredDataFromUserToFilter.next((City.target as HTMLInputElement).value);
  }

  CheckMargin(): void{
    if(this.CitiesFetchedResult.length == 0)
      this.banner_margin_bottom = false;
    else
      this.banner_margin_bottom = true;
  }

  trackByFn(index: number, result: any){
    return index;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
