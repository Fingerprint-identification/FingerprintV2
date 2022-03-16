/* Modules from core */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule, Meta, Title } from '@angular/platform-browser';

/* For hashing in routes */
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/* Http imports */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* App routing */
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* App component */
import { AppComponent } from './app.component';

import { AuthGuard } from './core/guard/auth.guard';

import { FormGuardGuard } from './core/guard/form-guard.guard';

import { TokenIntercepterService } from './core/intercepters/token.service';

import { ErrorInterceptor } from './core/intercepters/error.interceptor';

import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponentsModule } from './modules/shared-components/shared-components.module';


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
