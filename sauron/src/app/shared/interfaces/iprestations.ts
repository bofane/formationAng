import { State } from "../enums/State";

export interface IPrestations {
  id: string;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tauxTva: number;
  comment: string;
  state: State;
  totalHT(): number;
  totalTTC(): number;
}
