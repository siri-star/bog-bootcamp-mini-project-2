import './App.css';
import React, {useState} from 'react';

function App() {
  const[catFacts, setCatFacts] = useState([]);
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
      <div className="container">
        <button onClick={newFactHandler}>new cat fact :D</button>
      </div>
    </div>
  );
}

export default App;
