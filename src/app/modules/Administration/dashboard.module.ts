import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserInfoComponent } from './components/signup-user-info/user-info.component';
import { UserFamilyInfoComponent } from './components/signup-family-info/user-family-info.component';
import { ScanFingerprintComponent } from './components/scan-fingerprint/scan-fingerprint.component';
import { DoneComponent } from './components/done/done.component';
import { DashboardComponent } from './pages/admin-dashboard/dashboard.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { CheckFingerprintComponent } from './pages/check-fingerprint/check-fingerprint.component';
import { ProfileComponent } from './pages/user-profile/profile.component';
import { ComponentIconsComponent } from './components/mission-icons/component-icons.component';
import { UserSearchedInfoComponent } from './components/profile-user-info/user-searched-info.component';
import { FamilySearchedInfoComponent } from './components/profile-family-info/family-searched-info.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ButtonsComponent } from './components/actions-buttons/buttons.component';


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
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class DashboardModule { }
