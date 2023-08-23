import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { fetchPokemonView } from '../actions/pokemonActions';

import { RootState } from '../reducers';

const PokemonView: React.FC = () => {
  const { id } = useParams();
  const dispatch :any = useDispatch();


  useEffect(() => {
    dispatch(fetchPokemonView(id));
  }, [dispatch]);

 
  return (
    <div>
      <h1>Pokemon 도감</h1>
     
     
     
    </div>
  );
};

export default PokemonView;
