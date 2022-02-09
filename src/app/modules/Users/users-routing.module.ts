import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: 'create', component: CreateUserComponent },
  { path: 'list', component: UsersListComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
