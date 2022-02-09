import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AccountComponent } from './components/account/account.component';
import { PermissionComponent } from './components/permission/permission.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    AccountComponent,
    PermissionComponent,
    EditProfileComponent,
    ContactComponent,
    ProfileComponent,
    UsersListComponent,
    CreateUserComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
