/* General/common import */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Routing imports */
import { HomeRoutingModule } from './home-routing.module';

/* Form imports */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Component imports */
import { HomeComponent } from './Components/home/home.component';
import { DeviceComponent } from './Components/device/device.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FilterPipe } from 'src/app/core/custom-pipe/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    DeviceComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
