import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientComponent } from '../prestations/containers/list-client/list-client.component';

@NgModule({
  declarations: [ClientsComponent, ListClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
