import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';

import { ResetPinComponent } from './components/reset-pin/reset-pin.component';

import { LoginComponent } from './components/login/login.component';

import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';

/**
 * Auth module
 */

@NgModule({
  declarations: [
    ResetPhoneComponent,
    ResetPinComponent,
    LoginComponent,
    ConfirmPasswordComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
