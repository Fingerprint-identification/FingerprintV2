/* Modules from core */
import { NgModule } from '@angular/core';

import { BrowserModule, Meta } from '@angular/platform-browser';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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

import { AdminGuard } from './core/guard/admin.guard';

import { FormGuardGuard } from './core/guard/form-guard.guard';

import { UserGuard } from './core/guard/user.guard';

import { TokenIntercepterService } from './core/intercepters/token.service';

import { ErrorInterceptor } from './core/intercepters/error.interceptor';



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
    FormsModule
  ],
  providers: [
    AuthGuard, FormGuardGuard, AdminGuard, UserGuard, Meta
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    } , {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
