import { PokemonAction, FETCH_POKEMON_LIST,FETCH_POKEMON_VIEW } from '../actions/pokemonActions';

interface PokemonState {
  names: string[];
}

const initialState: PokemonState = {
  names: [],
};

const pokemonReducer = (
  state = initialState,
  action: PokemonAction
): any => {
  switch (action.type) {
    case FETCH_POKEMON_LIST:
      return {
        ...state,
        names: action.payload,
      };
      case FETCH_POKEMON_VIEW:
        return {
          ...state,
          data: action.payload,
          
        };
    default:
      return state;
  }
};

export default pokemonReducer;
