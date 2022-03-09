import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';

/**
 * Device component
 */
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  /**
   * Local referance to extract address of city from navbar
   */
  CityAdderss!: string;

  /**
   * Local referance to extract street of city from navbar
   */
  CityStreet!: string;
  /**
   * LOcal reference to store city to display it in this page
   */
  CityChosen!: any;

  /**
   *
   * @param actRoute to extract id from navbar
   */
  constructor(
    private actRoute: ActivatedRoute,
    private SearchSErvice: SearchService,
    private _router: Router
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      (this.CityAdderss = params['CityAdderss']),
        (this.CityStreet = params['CityStreet']);
    });
  }
}
