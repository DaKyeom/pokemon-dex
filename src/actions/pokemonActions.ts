import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { getPokemonList,getPokemonView } from '../api';

// Action Types
export const FETCH_POKEMON_LIST = 'FETCH_POKEMON_LIST';
export const FETCH_POKEMON_VIEW = 'FETCH_POKEMON_VIEW';

interface FetchPokemonAction {
  type: string;
  payload: string[];
}

export type PokemonAction = any;

export const fetchPokemonList = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const data = await getPokemonList(10, 0);

  const pokemonNames = data.map((pokemon) => pokemon.name);
  dispatch({ type: FETCH_POKEMON_LIST, payload: pokemonNames });
};

export const fetchPokemonView = (name:string | undefined): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const data = await getPokemonView(name);

  dispatch({ type: FETCH_POKEMON_VIEW, payload: {id:data.id} });
};

