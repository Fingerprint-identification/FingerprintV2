import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { DeleteAdminComponent } from './components/delete-admin/delete-admin.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: ManagerDashboardComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'delete',
        component: DeleteAdminComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
