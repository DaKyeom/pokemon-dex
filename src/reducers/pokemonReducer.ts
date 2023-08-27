import { PokemonState, Action, ActionType } from "../types";

const initialState: PokemonState = {
	list: [],
	view: null,
	currentPage: 1,
};
/**
 *
 * @param state
 * @param action
 * @returns
 */
const pokemonReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.SEARCH:
			return {
				...state,
				list: action.payload,
			};

		case ActionType.ADD_PAGE:
			return {
				...state,
				currentPage: state.currentPage + 1,
			};

		case ActionType.FETCH_POKEMON_LIST:
			return {
				...state,
				list: action.payload,
			};

		case ActionType.FETCH_POKEMON_VIEW:
			return {
				...state,
				view: action.payload,
			};

		default:
			return state;
	}
};

export default pokemonReducer;
