import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserFamilyInfoComponent } from './components/user-family-info/user-family-info.component';
import { ScanFingerprintComponent } from './components/scan-fingerprint/scan-fingerprint.component';
import { DoneComponent } from './components/done/done.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { CheckFingerprintComponent } from './pages/check-fingerprint/check-fingerprint.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComponentIconsComponent } from './components/component-icons/component-icons.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { UserSearchedInfoComponent } from './components/user-searched-info/user-searched-info.component';
import { FamilySearchedInfoComponent } from './components/family-searched-info/family-searched-info.component';
/**
 * Dashboard Module
 */
@NgModule({
  declarations: [
    UserInfoComponent,
    UserFamilyInfoComponent,
    ScanFingerprintComponent,
    DoneComponent,
    DashboardComponent,
    SignupUserComponent,
    CheckFingerprintComponent,
    ProfileComponent,
    ComponentIconsComponent,
    ButtonsComponent,
    UserSearchedInfoComponent,
    FamilySearchedInfoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
