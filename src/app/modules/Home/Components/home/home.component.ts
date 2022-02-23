import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/core/models/device';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner_margin_bottom: boolean = false;
  devices: Device[] = [
    {
      address: 'Portsaid, Second area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
    {
      address : "Elshrqia, Second area" ,
      street: "El-Salam office, Shebin El-Kom street"
    },
    {
      address: 'Ismailia, Second area',
      street: 'El-Salam office, Shebin El-Kom street',
    },
  ];
  trackByFn(index: number, device: Device) {
    return index;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.devices.length == 0) this.banner_margin_bottom = true;
  }
}
