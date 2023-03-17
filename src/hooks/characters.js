import useSWR from 'swr';
import fetcher from './fetcher';

// TODO: No se están obteniendo los datos, la URI puede ser la incorrecta
export const useCharacters = () => {
  const { data, error } = useSWR('/api/characters', fetcher);
  return {
    data,
    loading: !error && !data,
    error,
  };
};

// TODO: No se están obteniendo los datos, la URI puede ser la incorrecta
export const useCharacter = (id) => {
  const { data, error } = useSWR(`/api/characters/${id}`, fetcher);

  return {
    data,
    loading: !error && !data,
    error,
  };
};
