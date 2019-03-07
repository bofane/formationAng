import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  tabClient: string[];
  listCLient: Client[];

  constructor(private service: ClientServiceService) { }

  ngOnInit() {
    this.listCLient = this.service.client;
// tslint:disable-next-line: max-line-length
    this.tabClient = ['Id', 'Nom Client', 'Nombre jour', 'Etat', 'Type prestation', 'TauxTva', 'Commentaire', 'TJMHT', 'Total TTC', 'Total HT'];
  }

}


