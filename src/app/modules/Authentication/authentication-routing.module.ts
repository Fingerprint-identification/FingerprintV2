import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';

import { ResetPinComponent } from './components/reset-pin/reset-pin.component';

import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';

import { LoginFormComponent } from './components/login-form/login-form.component';

import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

import { PinGuard } from 'src/app/core/guard/pin.guard';

import { ConfirmGuard } from 'src/app/core/guard/confirm.guard';

import { AuthApiService } from './shared/services/auth-api.service';

import { AuthService } from './shared/services/auth.service';

/** Auth router  */
const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: {
      title: 'Login'
    },children: [
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
        canActivate: [PinGuard],
        canLoad: [PinGuard],
        data: {
          title: 'Pin password'
        }
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent,
        canActivate: [ConfirmGuard],
        canLoad: [ConfirmGuard],
        data: {
          title: 'Confirm password'
        }
      },
      {
        path: '',
        redirectTo: 'login-password',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthApiService,
    AuthService,
    TokenStorageService
  ]
})
export class AuthenticationRoutingModule { }
