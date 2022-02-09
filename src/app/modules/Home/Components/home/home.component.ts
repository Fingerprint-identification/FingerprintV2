import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banner_margin_bottom: boolean = false;
  devices:any[] = [
    {
      address : "Ismailia, Second area" ,
      streat: "El-Salam office, Shebin El-Kom street"
    },
    {
      address : "Ismailia, Second area" ,
      streat: "El-Salam office, Shebin El-Kom street"
    },
    {
      address : "Ismailia, Second area" ,
      streat: "El-Salam office, Shebin El-Kom street"
    }

  ];

  constructor() { }

  ngOnInit(): void {
    if(this.devices.length == 0)
      this.banner_margin_bottom = true;
  }


}
