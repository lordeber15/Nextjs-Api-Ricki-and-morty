import { CharacterRepository, ShowAllAction } from '../../../core/character';
import getKnex from '../../../knex';

const characterRepo = CharacterRepository({ knex: getKnex() });

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const useCase = ShowAllAction({ characterRepo });
      const characters = await useCase.execute();
      res.status(200).json(characters);
      break;
    case 'POST':
      res.status(405).json({ message: 'Method not allowed' });
      break;
    case 'PUT':
      res.status(405).json({ message: 'Method not allowed' });
      break;
    case 'DELETE':
      res.status(405).json({ message: 'Method not allowed' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${method} not allowed` });
  }
  // TODO: atender el request de todos los personajes usando la acción correcta.
  //  La petición GET se atiende devolviendo todos los caracteres.
  //  En todos los demás tipos de métodos (POST, PUT, DELETE),
  //  se deniega la petición con un error HTTP 405.

  // usar el objeto "characterRepo" para instanciar la acción
  // devolver HTTP 200 y la lista de personajes
  res.status(200).json([{
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: 'Earth (C-137)',
  }]);
}
