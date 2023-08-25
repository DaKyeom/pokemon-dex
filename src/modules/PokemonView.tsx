import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { fetchPokemonView } from '../actions/pokemonActions';
import { RootState } from '../reducers';

const PokemonView: React.FC = () => {
  const { name } = useParams();
  const dispatch :any = useDispatch();

  const data = useSelector((state: RootState) => state?.pokemon?.data);
 

  useEffect(() => {
    dispatch(fetchPokemonView(name));
  }, [dispatch]);

  return (
    <div>
     <h1>포켓몬 상세 정보</h1>
     <p>{`번호: ${data?.id}`}</p>
     <p>{`이름: ${data?.koName}`}</p>
     <p>{`무게: ${data?.weight}`}</p>
     <p>{`키: ${data?.height}`}</p>
     <div >
     <p>능력: 
     {data?.abilities?.map((value:any,index:number)=><span key={index}>{value?.ability?.name} {index < data.abilities.length - 1 ? ', ' : ''}</span>)}
     </p>
     </div>
    </div>
  );
};

export default PokemonView;
