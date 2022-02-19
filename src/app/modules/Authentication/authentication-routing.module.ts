import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';
import { ResetPinComponent } from './components/reset-pin/reset-pin.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent ,
    children: [
      {
        path: 'login-password',
        component: LoginComponent
      },
      {
        path: 'reset-password',
        component: ResetPhoneComponent,
      },
      {
        path: 'reset-password-pin',
        component: ResetPinComponent,
      },{
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
