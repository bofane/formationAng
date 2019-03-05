import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PrestationsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PrestationRoutingModule { }
