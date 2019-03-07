import { Prestation } from 'src/app/shared/models/prestation.model';
import { Client } from 'src/app/shared/models/client.model';

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

export const fakeClient: Client[] = [
  new Client( {id: 'dgsfgdf', name: 'alfredo', prenom: 'Dasilva' }),
  new Client({ id: 'zfhsgh', name: 'GIL', prenom: 'JAUNO'  })
];

