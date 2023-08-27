export interface Pokemon {
	name: string;
	url: string;
}

export enum ActionType {
	SEARCH = "SEARCH",
	ADD_PAGE = "ADD_PAGE",
	FETCH_POKEMON_LIST = "FETCH_POKEMON_LIST",
	FETCH_POKEMON_VIEW = "FETCH_POKEMON_VIEW",
}

export interface Action {
	type: ActionType;
	payload: unknown;
}

export interface PokemonState {
	list: any;
	view: any;
	currentPage: number;
}
