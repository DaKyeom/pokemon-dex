/**
 * 포켓몬API 불러온다.
 */
import axios, { AxiosResponse } from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

const apiUrl =  'https://pokeapi.co/api/v2';

export const getPokemonList = async (
  limit: number,
  offset: number
): Promise<Pokemon[]> => {
  const response: AxiosResponse = await axios.get(`${apiUrl}/pokemon?limit=${limit}&offset=${offset}`);

  return response.data.results;
};

export const getPokemonView = async (
    name: string|undefined
  ): Promise<any> => {
    const response: AxiosResponse = await axios.get(`${apiUrl}/pokemon/${name}`);
    
    return response.data;
  };

  