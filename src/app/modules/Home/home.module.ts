/* General/common import */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routing imports */
import { HomeRoutingModule } from './home-routing.module';

/* Component imports */
import { HomeComponent } from './Components/home/home.component';
import { DeviceComponent } from './Components/device/device.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

/*  components import */
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

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
