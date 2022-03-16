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

import { SharedComponentsModule } from '../shared-components/shared-components.module';

/**
 * The header module
 *
 */

@NgModule({
  declarations: [
    HomeComponent,
    DeviceComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule
  ]
})
export class HomeModule { }
