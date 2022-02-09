import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LatestOrdersComponent } from './components/latest-orders/latest-orders.component';
import { SalesStatusComponent } from './components/sales-status/sales-status.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LatestOrdersComponent,
    SalesStatusComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
