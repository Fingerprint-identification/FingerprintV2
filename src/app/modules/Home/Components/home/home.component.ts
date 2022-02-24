import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  constructor(private pipe: FilterPipe) {

  }

  ngOnInit(): void {
    /* margin when no devices selected */
    if (this.devices.length == 0) this.banner_margin_bottom = true
  }
}
