/* Modules from core */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* For hashing in routes */
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/* Http imports */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* App routing */
import { AppRoutingModule } from './app-routing.module';

/* App component */
import { AppComponent } from './app.component';

/* Angular material */
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatDialogModule } from '@angular/material/dialog';

/* Guard imports */
import { AuthGuard } from './core/guard/auth.guard';
import { AdminGuard } from './core/guard/admin.guard';
import { FormGuardGuard } from './core/guard/form-guard.guard';
import { ManagerGuard } from './core/guard/manager.guard';
import { UserGuard } from './core/guard/user.guard';
import { TokenIntercepterService } from './core/intercepters/token.service';

/*  components import */
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, FormGuardGuard , AdminGuard, ManagerGuard, UserGuard
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
