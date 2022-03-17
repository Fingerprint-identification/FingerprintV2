import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { FamilyComponent } from '../Users/components/family/family.component';
import { DoneComponent } from './components/done/done.component';
import { ScanFingerprintComponent } from './components/scan-fingerprint/scan-fingerprint.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CheckFingerprintComponent } from './pages/check-fingerprint/check-fingerprint.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchForUserComponent } from './pages/search-for-user/search-for-user.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'signup',
        component: SignupUserComponent,
        children: [
          {
            path: 'userInfo',
            component: UserInfoComponent
          },
          {
            path: '',
            redirectTo: 'userInfo',
            pathMatch: 'full'
          },
          {
            path: 'familyInfo',
            component: FamilyComponent
          },
          {
            path: 'scan',
            component: ScanFingerprintComponent
          },
          {
            path: 'done',
            component: DoneComponent
          }
        ]
      },
      {
        path: 'checkFingerprint',
        component: CheckFingerprintComponent
      },
      {
        path: 'searchUser',
        component: SearchForUserComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
