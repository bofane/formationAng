import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from "src/app/shared/enums/State";

export const fakePrestations: Prestation[] = [
  new Prestation(
    {
      id: '1d03K5',
      typePresta: 'formation',
      client: 'Nemesys',
      comment: 'commentaire nemesis'
    }
  ),
  new Prestation({
      id: '2d03K5',
      typePresta: 'dev',
      client: 'Capgemini',
      comment: 'commentaire Capgemini',
      tjmHt: 30000,
      nbJours: 50,
    }
  )
];
