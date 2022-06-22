import { useState, useEffect } from 'react';
import { getCandy } from './services/fetch-utlis';
import CandyList from './Candy/CandyList';
import './App.css';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);

  async function fetchCandyData() {
    setIsLoadingCandies(true);
    const data = await getCandies();
    setIsLoadingCandies(false);
    setCandies(data); 
  }

  useEffect(() => {
    fetchCandyData(); 
  }, []);

  return (
    <div className="App">
      <div candy-section>
        {
          isLoadingCandies
        }</div>


    </div>
  );
}

export default App;
