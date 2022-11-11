import './App.css';
import React, {useState} from 'react';

function App() {
  const[catFacts, setCatFacts] = useState([{fact: "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.", isFavorite: false}]);
  async function getCatFact() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    setCatFacts([{fact: data.fact, isFavorite: false}, ...catFacts])
  }

  function newFactHandler(e) {
    getCatFact();
  }

  return (
    <div className="App">
      <h1>{catFacts[0].fact}</h1>
      <button onClick={newFactHandler}>new cat fact :D</button>
    </div>
  );
}

export default App;
