import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent, ItemPrestationComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
