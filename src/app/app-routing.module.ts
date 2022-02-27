/* common modules */
import { NgModule } from '@angular/core';

/* Hashing strategy # imports*/
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/* Routes modules imports */
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* component imports */
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


/*  Routes */

const routes: Routes = [
  {
    path: 'Login',
    loadChildren: ()=> import('./modules/Authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: 'Admin',
    loadChildren: ()=> import('./modules/Administration//dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'User',
    loadChildren: ()=> import('./modules/Users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'Home',
    loadChildren: ()=> import('./modules/Home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule { }
