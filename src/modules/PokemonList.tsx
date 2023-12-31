import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
	fetchPokemonList,
	addPage,
	searchData,
} from "../actions/pokemonActions";
import { RootState } from "../reducers";
import "../Styles.css";

const LIST_LIMIT = 50;

const PokemonList: React.FC = () => {
	const dispatch: any = useDispatch();
	const { list, currentPage } = useSelector(
		(state: RootState) => state?.pokemon
	);

	const LIST_OFFSET = (currentPage - 1) * LIST_LIMIT;

	const [searchId, setSearchId] = useState<number | null>(null);

	const fetchMoreList = async () => {
		try {
			dispatch(fetchPokemonList(LIST_OFFSET));
		} catch (error) {
			console.error("Error fetching list:", error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchId(parseInt(e?.target?.value));
	};

	const handleScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = document?.documentElement;

		if (scrollHeight - scrollTop - clientHeight < 100) {
			dispatch(addPage());
		}
	};

	useEffect(() => {
		fetchMoreList();
	}, [currentPage, searchId]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleSearch = () => {
		if (searchId) {
			dispatch(searchData(searchId));
		} else {
			alert("포켓몬 번호를 입력해주세요");
		}
	};

	return (
		<div className="container">
			<h1 className="header">Pokemon 도감</h1>
			<div>
				<input placeholder="포켓몬 번호를 검색하세요" onChange={handleChange} />
				<button className="button" onClick={handleSearch}>
					검색
				</button>
			</div>

			{list.map((name: string, index: number) => (
				<div className="card" key={index}>
					<Link to={`view/${name}`}>{name}</Link>
				</div>
			))}
		</div>
	);
};

export default PokemonList;
