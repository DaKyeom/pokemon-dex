import React from 'react';
import PokemonList from './PokemonList';
import './Styles.css'

const Home: React.FC = () => {

  return (
    <div className='container' >

          
        <PokemonList/>
        
    </div>
  );
};

export default Home;
