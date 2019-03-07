import { IClient } from '../interfaces/iclient';
import { StateClient } from '../enums/state-client.enum';

export class Client implements IClient {
  id: string;
  name: string;
  prenom: string;
  state: StateClient;


  constructor(field?: Partial<Client>) {
    if (field) {
      Object.assign(this, field);
    }
  }
}
