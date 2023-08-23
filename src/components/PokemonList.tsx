import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { fetchPokemonList } from '../actions/pokemonActions';
import { RootState } from '../reducers';

const PokemonList: React.FC = () => {
    const navigation= useNavigate();

  const dispatch :any = useDispatch();
  const pokemonNames = useSelector((state: RootState) => state.pokemon.names);


  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const handleClick =(name:string)=>{
    console.log(name)
    navigation(`view/${name}`)
  }
  return (
    <div>
      <h1>Pokemon 도감</h1>
     
      {pokemonNames.map((name:any) => (
      <div key={name} onClick={()=>handleClick(name)}>
     <li >{name}</li>
     </div>
        ))}
     
    </div>
  );
};

export default PokemonList;
