import { generateId } from '../id';

export const boards = [
  {
    id: new generateId().randomId,
    name: ".NetReactTrelloClone",
    recent: true
  },
  {
    id: new generateId().randomId,
    name: ".NetRealone",
    recent: false
  }
];
