import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
collections: Prestation[];
tab: string[];
  private sub: Subscription;
  constructor( private services: PrestationService) { }

  ngOnInit() {
     this.sub = this.services.collection.subscribe((data) =>{
       console.log(data);

       this.collections = data;
    });

     this.tab = ['Id', 'Nom Client', 'Nombre jour', 'Etat', 'Type prestation', 'TauxTva', 'Commentaire', 'TJMHT', 'Total TTC', 'Total HT'];
  }
ngOnDestroy(){
this.sub.unsubscribe();
}
}
