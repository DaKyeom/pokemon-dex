import React from 'react';
import './App.css';
import { Routes, Route,  BrowserRouter as Router, } from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonView from './components/PokemonView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/view/:id" element={<PokemonView />} />
     
        </Routes> 
    </Router>

      </header>
    </div>
  );
}

export default App;
