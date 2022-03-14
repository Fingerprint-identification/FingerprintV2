import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './components/family/family.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

/**
 * Routes for user
 */
const routes: Routes = [
    {
      path: '',
      component: ProfilePageComponent,
      children: [
        {
          path: 'personal',
          component: PersonalComponent
        },
        {
          path: 'family',
          component: FamilyComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
