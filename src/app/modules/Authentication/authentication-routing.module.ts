import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';

import { ResetPinComponent } from './components/reset-pin/reset-pin.component';


import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';

import { LoginFormComponent } from './components/login-form/login-form.component';

/** Auth router  */
const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent ,
    data: {
      title: 'Login'
    }
    ,
    children: [
      {
        path: 'login-password',
        component: LoginFormComponent,
        data: {
          title: 'Login password'
        }
      },
      {
        path: 'reset-password',
        component: ResetPhoneComponent,
        data: {
          title: 'Reset password'
        }
      },
      {
        path: 'pin-password',
        component: ResetPinComponent,
        data: {
          title: 'Pin password'
        }
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent,
        data: {
          title: 'Confirm password'
        }
      },
      {
        path: '',
       redirectTo: 'login-password',
       pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
