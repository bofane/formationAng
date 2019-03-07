import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { SharedModule } from '../shared/shared.module';
import { ListClientComponent } from './containers/list-client/list-client.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { FormsModule } from '@angular/forms';
import { FormPrestationRectiveComponent } from './components/form-prestation-rective/form-prestation-rective.component';


@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, ListClientComponent, FormPrestationComponent, AddPrestationComponent, PageAddPrestationComponent, FormPrestationRectiveComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PrestationsModule { }
