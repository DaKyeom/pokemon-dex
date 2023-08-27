import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../reducers";
import { getPokemonList, getPokemonView, searchPokemon } from "../api";
import { ActionType } from "../types";

/**
 * 포켓몬 번호로 검색한 데이터 찾기
 * @param id
 * @returns
 */
export const searchData =
	(id: number | null): ThunkAction<void, RootState, unknown, Action<string>> =>
	async (dispatch) => {
		const data = await searchPokemon(id);

		dispatch({ type: ActionType.SEARCH, payload: [data?.name] });
	};

export const addPage = () => ({
	type: ActionType.ADD_PAGE,
});

/**
 * 포켓몬 리스트 데이터
 * @param limit
 * @returns
 */
export const fetchPokemonList =
	(limit: number): ThunkAction<void, RootState, unknown, Action<string>> =>
	async (dispatch) => {
		const data = await getPokemonList(limit);
		const pokemonName = data?.map((value) => value?.name);

		dispatch({ type: ActionType.FETCH_POKEMON_LIST, payload: pokemonName });
	};

/**
 * 포켓몬 상세
 * @param name
 * @returns
 */
export const fetchPokemonView =
	(
		name: string | undefined
	): ThunkAction<void, RootState, unknown, Action<string>> =>
	async (dispatch) => {
		const data = await getPokemonView(name);

		dispatch({ type: ActionType.FETCH_POKEMON_VIEW, payload: data });
	};
