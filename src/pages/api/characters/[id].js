import { CharacterRepository, ShowDetailsAction } from '../../../core/character';
import getKnex from '../../../knex';

const characterRepo = CharacterRepository({ knex: getKnex() });

export default async function handler(req, res) {
  const { query: { id }, method } = req;

  switch (method) {
    case 'GET':
      const useCase = ShowDetailsAction({ characterRepo });
      const character = await useCase.execute({ characterId: id });
      res.status(200).json(character);
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


  // TODO: atender el request del personaje solicitado en base a su ID usando la acción correcta.
  //  La petición GET se atiende devolviendo el personaje.
  //  En todos los demás tipos de métodos (POST, PUT, DELETE),
  //  se deniega la petición con un error HTTP 405.

  // Usar el objeto "characterRepo" para instanciar la acción.
  // Devolver HTTP 200 y al personaje con el ID.
  // Si no se ha encontrado al personaje, devolver HTTP 404.
  /*res.status(200).json({
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    origin: 'Earth (C-137)',
  });*/
}
