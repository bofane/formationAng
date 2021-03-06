import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: '', redirectTo:'/login', pathMatch:'full'},
  // { path: '**', component: PageNotFoundComponent }
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule'
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule'
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //for debug
    )
  ]
})
export class AppRoutingModule {}
