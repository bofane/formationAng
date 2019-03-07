import { StateClient } from '../enums/state-client.enum';


export interface IClient {
  id: string;
  name: string;
  prenom: string;
  state: StateClient;

}
