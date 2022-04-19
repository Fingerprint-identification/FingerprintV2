import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PermissionGuard } from './core/guard/permission.guard';

import { AuthGuard } from './core/guard/auth.guard';


/*  Routes */

const routes: Routes = [
  {
    path: 'Login',
    loadChildren: ()=> import('./modules/Authentication/authentication.module').then((m) => m.AuthenticationModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      title: 'Login'
    }
  },
  {
    path: 'Admin',
    loadChildren: ()=> import('./modules/Administration/dashboard.module').then((m) => m.DashboardModule),
     canActivate:[PermissionGuard],
     canLoad: [PermissionGuard],
    data: {
      title: 'Admin',
      role: 'admin'
    }
  },
  {
    path: 'User',
    loadChildren: ()=> import('./modules/Users/users.module').then((m) => m.UsersModule),
    canActivate:[PermissionGuard],
    canLoad: [PermissionGuard],
    data: {
      title: 'User',
      role: 'user'
    }
  },
  {
    path: 'Home',
    loadChildren: ()=> import('./modules/Home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Home'
    }
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Not founded',
    }
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabledBlocking'
}),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule { }
