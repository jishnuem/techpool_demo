import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MasterpageComponent } from './pages/masterpage/masterpage.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"masterpage",
    component:MasterpageComponent,

    children:[
      {
        path:"dashboard",
        loadChildren: () => import('./pages/dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path:"home",
        loadChildren: () => import('./pages/home/home.module').then((m)=>m.HomeModule)
      },
      {
        path:"contacts",
        loadChildren: () => import('./pages/contacts/contacts.module').then((m)=>m.ContactsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
