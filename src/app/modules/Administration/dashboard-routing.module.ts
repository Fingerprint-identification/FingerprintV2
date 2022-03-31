import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { DoneComponent } from './components/done/done.component';
import { FamilySearchedInfoComponent } from './components/profile-family-info/family-searched-info.component';
import { ScanFingerprintComponent } from './components/scan-fingerprint/scan-fingerprint.component';
import { UserFamilyInfoComponent } from './components/signup-family-info/user-family-info.component';
import { UserInfoComponent } from './components/signup-user-info/user-info.component';
import { UserSearchedInfoComponent } from './components/profile-user-info/user-searched-info.component';
import { CheckFingerprintComponent } from './pages/check-fingerprint/check-fingerprint.component';
import { DashboardComponent } from './pages/admin-dashboard/dashboard.component';
import { ProfileComponent } from './pages/user-profile/profile.component';
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
            redirectTo: 'scan',
            pathMatch: 'full'
          },
          {
            path: 'familyInfo',
            component: UserFamilyInfoComponent
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
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path:'userSearchedInfo',
            component: UserSearchedInfoComponent
          },
          {
            path:'familySearchedInfo',
            component: FamilySearchedInfoComponent
          },{
            path:'',
            redirectTo:'userSearchedInfo',
            pathMatch:'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
      }
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
