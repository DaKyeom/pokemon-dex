import axios, { AxiosResponse } from "axios";

import { Pokemon } from "./types";

const apiUrl = "https://pokeapi.co/api/v2";

/**
 * api에서 전달해주는 포켓몬 이름을 한글로 변환
 * @param name
 * @returns
 */
export const transferKo = async (name: string | undefined): Promise<string> => {
	const response = await axios.get(
		`https://pokeapi.co/api/v2/pokemon-species/${name}`
	);
	const koName = response?.data?.names.find(
		(value: any) => value?.language?.name === "ko"
	)?.name;

	return koName;
};

/**
 * 포켓몬 진화 단계를 추출
 * @param name
 * @returns
 */
export const getPokemonEvolution = async (name: string | undefined) => {
	const response = await axios.get(
		`https://pokeapi.co/api/v2/pokemon-species/${name}`
	);
	const url = response?.data?.evolution_chain?.url;
	const evolutionResponse = await axios.get(url);
	const evolutionData = evolutionResponse?.data?.chain;
	const basePokemon = evolutionData?.species?.name;
	const nextPokemon = evolutionData?.evolves_to?.[0]?.species.name;
	const finalPokemon =
		evolutionData.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;

	const results = [basePokemon, nextPokemon, finalPokemon];

	return results;
};

export const searchPokemon = async (id: number | null) => {
	const response: AxiosResponse = await axios.get(`${apiUrl}/pokemon/${id}`);

	return response?.data;
};

export const getPokemonList = async (limit: number): Promise<Pokemon[]> => {
	const response: AxiosResponse = await axios.get(
		`${apiUrl}/pokemon?limit=${limit}`
	);
	return response?.data?.results;
};

/**
 * 포켓몬 이름을 가지고 포켓몬 상세 정보를 반환해주고, 포켓몬 이름을 한글로 변환해주는 api
 * @param name
 * @returns
 */
export const getPokemonView = async (name: string | undefined) => {
	const response: AxiosResponse = await axios.get(`${apiUrl}/pokemon/${name}`);

	const koName = await transferKo(name);
	const evolutionData = await getPokemonEvolution(name);

	return { ...response?.data, koName, evolution: evolutionData };
};
