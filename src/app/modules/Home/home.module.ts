/* General/common import */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routing imports */
import { HomeRoutingModule } from './home-routing.module';

/* Component imports */
import { HomeComponent } from './Components/home/home.component';
import { DeviceComponent } from './Components/device/device.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    DeviceComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
