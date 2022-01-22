import './App.css';

import React, { useEffect, useState } from 'react';

import Search from './comps/Search';
import RandomFromWorld from './comps/RandomFromWorld';
import Recipes from './comps/Recipes';

function App() {

  const API = "https://api.spoonacular.com/recipes/complexSearch?apiKey=a17cec5d37b34e3bbd5666b6bd6e36cb&sort=random"
  const [recipes, setRecipes ] = useState([]);

  const getRecipes = (API) => {
    fetch(API).then(res => res.json()).then(data => setRecipes(data.results)).catch(error => console.log(error))
  };

  useEffect(() => {getRecipes(API)}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ricette Vegetariane</h1>
        <Search />
      </header>
      <div className="world">
        <RandomFromWorld />
        <Recipes  recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
