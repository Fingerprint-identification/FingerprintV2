import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserFamilyInfoComponent } from './components/user-family-info/user-family-info.component';
import { ScanFingerprintComponent } from './components/scan-fingerprint/scan-fingerprint.component';
import { DoneComponent } from './components/done/done.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { CheckFingerprintComponent } from './pages/check-fingerprint/check-fingerprint.component';
import { SearchForUserComponent } from './pages/search-for-user/search-for-user.component';
import { ProfileComponent } from './pages/profile/profile.component';
/**
 * Dashboard Module
 */
@NgModule({
  declarations: [
    UserInfoComponent,
    UserFamilyInfoComponent,
    ScanFingerprintComponent,
    DoneComponent,
    SidebarComponent,
    DashboardComponent,
    SignupUserComponent,
    CheckFingerprintComponent,
    SearchForUserComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
