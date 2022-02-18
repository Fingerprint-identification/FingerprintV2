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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPhoneComponent } from './components/reset-phone/reset-phone.component';
import { ResetPinComponent } from './components/reset-pin/reset-pin.component';


@NgModule({
  declarations: [
    AuthCardComponent,
    LoginComponent,
    RegisterComponent,
    ResetPhoneComponent,
    ResetPinComponent,

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
