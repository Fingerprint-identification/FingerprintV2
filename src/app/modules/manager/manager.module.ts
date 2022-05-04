import { ManagerRoutingModule } from './manager-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    HomeComponent,
    ManagerDashboardComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManagerModule { }
