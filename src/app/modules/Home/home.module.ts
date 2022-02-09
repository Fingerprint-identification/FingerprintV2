/* General/common import */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routing imports */
import { HomeRoutingModule } from './home-routing.module';

/* Component imports */
import { HomeComponent } from './Components/home/home.component';
import { DeviceComponent } from './Components/device/device.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    DeviceComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
