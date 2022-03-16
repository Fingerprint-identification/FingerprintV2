import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserFamilyInfoComponent } from './components/user-family-info/user-family-info.component';
import { ScanFingerprintComponent } from './components/scan-fingerprint/scan-fingerprint.component';
import { DoneComponent } from './components/done/done.component';
/**
 * Dashboard Module
 */
@NgModule({
  declarations: [

  
    UserInfoComponent,
        UserFamilyInfoComponent,
        ScanFingerprintComponent,
        DoneComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
