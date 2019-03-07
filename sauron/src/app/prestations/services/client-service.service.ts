import { Injectable } from '@angular/core';
import { fakeClient } from './fake-prestation';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

// tslint:disable-next-line: variable-name
  private _clientC: Client[];

  constructor() {
     this.client = fakeClient;
  }
  // get collection
get client(): Client[] {
  return this._clientC;
}
// set collection
set client(clientCol: Client[]) {
  this._clientC = clientCol;
}
}
