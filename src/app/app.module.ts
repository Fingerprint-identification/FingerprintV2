/* Modules from core */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule, Meta, Title } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthGuard } from './core/guard/auth.guard';

import { FormGuardGuard } from './core/guard/form-guard.guard';

import { TokenIntercepterService } from './core/intercepters/token.service';

import { ErrorInterceptor } from './core/intercepters/error.interceptor';

import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponentsModule } from './modules/shared-components/shared-components.module';

import { CookieService } from 'ngx-cookie-service';

/**
 * App module
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  providers: [
    Title,
    CookieService,
    AuthGuard, FormGuardGuard, Meta
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
