import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
  new Prestation(
    {
      id: 'iddfd',
      typePresta: 'formation',
      client: 'Nemesys',
      comment: 'commentaire nemesis'
    }
  ),
  new Prestation({
      id: 'fdsgdfsgd',
      typePresta: 'dev',
      client: 'Capgemini',
      comment: 'commentaire Capgemini',
      tjmHt: 30000,
      nbJours: 50
    }
  )
];
