import './App.css';
import History from './components/History';
import Pagination from './components/Pagination';
import CurrentFact from './components/CurrentFact';
import React, {useState, useEffect} from 'react';

function App() {
  const[catFacts, setCatFacts] = useState([{fact: "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.", isFavorite: false}]);
  const [pageNum, setPageNum] = useState(0);

  return (
    <div className="App">

      <CurrentFact catFacts = {catFacts} setCatFacts = {setCatFacts}/>

      {/* TODO: add 'favorites' filter */}
      <History catFacts = {catFacts} pageNum = {pageNum} setCatFacts = {setCatFacts}/>

      <Pagination catFacts = {catFacts} pageNum = {pageNum} setPageNum = {setPageNum}/>

    </div>
  );
}

export default App;
