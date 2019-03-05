import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';

@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule
  ]
})
export class PrestationsModule { }
