import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestation';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private pCollection$: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    //  this.collection = fakePrestations;
    this.itemsCollection = afs.collection<Prestation>('prestationBD'); //prestation est le nom de la base de données dans fireStore
    this.pCollection$ = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) =>{
          return new Prestation(obj);
        })
      })
    );
  }
  //get collection
get collection():Observable<Prestation[]>{
  return this.pCollection$;
}
//set collection
set collection(col: Observable<Prestation[]>) {
  this.pCollection$ = col;
}

add(item: Prestation){
  // this.collection.push(item);

}
update(item: Prestation){

}

}

