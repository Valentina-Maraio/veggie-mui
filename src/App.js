import './App.css';

import Search from './comps/Search';
import RandomMeal from './comps/RandomMeal';
import Ricette from './comps/Ricette';
import RandomFromWorld from './comps/RandomFromWorld';
import Recipes from './comps/Recipes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ricette Vegetariane</h1>
        <Search />
      </header>
      <div className="random">
        <RandomMeal />
        <Ricette />
      </div>
      <div className="world">
        <RandomFromWorld />
        <Recipes />
      </div>
    </div>
  );
}

export default App;
