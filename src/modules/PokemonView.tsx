import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPokemonView } from "../actions/pokemonActions";
import { RootState } from "../reducers";
import { Loading } from "../components";

const PokemonView: React.FC = () => {
	const { name } = useParams();
	const dispatch: any = useDispatch();

	const data = useSelector((state: RootState) => state?.pokemon?.view);
	const {
		id,
		height,
		weight,
		koName,
		abilities,
		evolution,
		name: enNAme,
	} = data || {};

	useEffect(() => {
		dispatch(fetchPokemonView(name));
	}, [dispatch]);

	return !data || enNAme !== name ? (
		<Loading />
	) : (
		<div>
			<h1>포켓몬 상세 정보</h1>
			{data && (
				<div>
					<p>{`번호: ${id}`}</p>
					<p>{`이름: ${koName}`}</p>
					<p>{`무게: ${weight}`}</p>
					<p>{`키: ${height}`}</p>
					<div>
						<p>
							능력:
							{abilities?.map((value: any, index: number) => (
								<span key={index}>
									{value?.ability?.name}
									{index < abilities?.length - 1 ? ", " : ""}
								</span>
							))}
						</p>
					</div>
					<p>
						진화 단계:
						{evolution?.map((name: string, index: number) => (
							<span key={index}>
								{name ? name : "없음"}{" "}
								{index < evolution?.length - 1 ? " - " : ""}
							</span>
						))}
					</p>
				</div>
			)}
		</div>
	);
};

export default PokemonView;
