import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { ProfileComponent } from './components/profile/profile.component';

import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { PersonalComponent } from './components/personal/personal.component';

import { FamilyComponent } from './components/family/family.component';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { FooterComponent } from 'src/app/components/footer/footer.component';

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
    // NavbarComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
