import { useState, useEffect } from 'react';
import { getCandy } from './services/fetch-utlis';
import CandyList from './Candy/CandyList';
import Spinner from './Spinner';
import './App.css';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);

  async function fetchCandyData() {
    setIsLoadingCandies(true);
    const data = await getCandy();
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
          isLoadingCandies ? Spinner : <CandyList candies={candies} />
        }</div>


    </div>
  );
}

export default App;
