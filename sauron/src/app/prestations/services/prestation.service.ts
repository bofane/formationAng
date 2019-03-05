import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];

  constructor() {
     this.collection = fakePrestations;
  }
  //get collection
get collections():Prestation[]{
  return this._collection;
}
//set collection
set collection(col: Prestation[]) {
  this._collection = col;
}
}

