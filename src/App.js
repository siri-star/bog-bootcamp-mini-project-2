import './App.css';
import History from './components/History';
import React, {useState, useEffect} from 'react';

function App() {
  const[catFacts, setCatFacts] = useState([{fact: "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.", isFavorite: false}]);
  const [pageNum, setPageNum] = useState(0);
  
  async function getCatFact() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    const newCatFact = {fact: data.fact, isFavorite: false};
    setCatFacts([{fact: data.fact, isFavorite: false}, ...catFacts]);
  }

  function newFactHandler(e) {
    getCatFact();
  }

  return (
    <div className="App">

      <h1>{catFacts[0].fact}</h1>

      <button onClick={newFactHandler}>new cat fact :D</button>

      <History catFacts = {catFacts} pageNum = {pageNum}/>

      {/* TODO: (readability) move pagination stuff to its own component */}
      <button onClick = {e => {
        if (pageNum > 0) {
          setPageNum(pageNum - 1);
        }
      }}>previous</button>

      <button onClick={e => {
        if (10 * (pageNum + 1) < catFacts.length) {
          setPageNum(pageNum + 1);
        }
      }}>next</button>

      <p>page {pageNum + 1} out of {Math.floor(catFacts.length / 10 + 1)}</p>

    </div>
  );
}

export default App;
