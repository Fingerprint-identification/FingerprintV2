import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { ProfileComponent } from './components/profile/profile.component';

import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { PersonalComponent } from './components/personal/personal.component';

import { FamilyComponent } from './components/family/family.component';

import { SharedComponentsModule } from '../shared-components/shared-components.module';


/**
 * User Module
 */
@NgModule({
  declarations: [
    EditProfileComponent,
    ProfileComponent,
    ProfilePageComponent,
    PersonalComponent,
    FamilyComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedComponentsModule
  ]
})
export class UsersModule { }
