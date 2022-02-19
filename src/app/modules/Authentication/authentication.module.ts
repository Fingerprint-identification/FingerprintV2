/* common imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Forms imports */
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

/* Auth routing */
import { AuthenticationRoutingModule } from './authentication-routing.module';

/*  components imports */
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';
import { ResetPinComponent } from './components/reset-pin/reset-pin.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AuthCardComponent,
    RegisterComponent,
    ResetPhoneComponent,
    ResetPinComponent,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
