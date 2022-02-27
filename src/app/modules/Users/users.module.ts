import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { ProfileComponent } from './components/profile/profile.component';

/**
 * User Module
 */
@NgModule({
  declarations: [
    EditProfileComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
