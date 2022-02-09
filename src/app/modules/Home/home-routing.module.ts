/* Common imports */
import { NgModule } from '@angular/core';

/* Routes imports */
import { RouterModule, Routes } from '@angular/router';

/* Component imports */
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { DeviceComponent } from './Components/device/device.component';
import { HomeComponent } from './Components/home/home.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'Home-page',
    component: HomePageComponent,
    children: [
      {
        path: 'Device',
        component: DeviceComponent
      },
      {
        path: 'Public',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: 'Home-page'
      },
    ]

  },
  {
    path: '',
    redirectTo: 'Home-page',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
