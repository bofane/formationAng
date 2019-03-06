import { IPrestations } from '../interfaces/iprestations';
import { State } from '../enums/State';

export class Prestation implements IPrestations{
  id: string;  typePresta: string;
  client: string;
  tjmHt = 500;
  nbJours = 0;
  tauxTva = 20;
  comment: string;
  state: State.OPTION;

constructor(field?: Partial<Prestation>) {
  if (field) {
    Object.assign(this, field);
  }
}
  totalHT(): number {
    return this.tjmHt = this.nbJours;
  }
  totalTTC( tva?): number {

    if ( !tva ) {
      return this.totalHT() * ( 1 + this.tauxTva / 100 );
    }
    if ( tva <= 0 ) {
      return this.totalHT();
    }
    return this.totalHT() * ( 1 + tva / 100);

  }

}
