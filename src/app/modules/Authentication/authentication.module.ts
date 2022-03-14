import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';

import { ResetPinComponent } from './components/reset-pin/reset-pin.component';


import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { Title } from '@angular/platform-browser';

/**
 * Auth module
 */

@NgModule({
  declarations: [
    ResetPhoneComponent,
    ResetPinComponent,
    ConfirmPasswordComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[Title]
})
export class AuthenticationModule { }
