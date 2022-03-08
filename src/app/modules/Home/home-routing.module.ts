import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DeviceComponent } from './Components/device/device.component';

import { HomeComponent } from './Components/home/home.component';

import { HomePageComponent } from './Pages/home-page/home-page.component';

/**
 * Routes for home page
 */
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children:[
      {
        path: 'Public',
        component: HomeComponent,
      },
      {
        path: 'Device/:id',
        component: DeviceComponent
      },
      {
        path: '',
        redirectTo: 'Public',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
