import { useState, useEffect } from 'react';
import { getCandy } from './services/fetch-utlis';
import CandyList from './Candy/CandyList';
import { getFruit } from './services/fetch-utlis';
import FruitList from './Fruit/FruitList';
import Spinner from './Spinner';
import './App.css';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);
  const [fruits, setfruits] = useState([]);
  const [isLoadingFruit, setIsLoadingFruit] = useState(false);
  

  async function fetchCandyData() {
    setIsLoadingCandies(true);
    const data = await getCandy();
    setIsLoadingCandies(false);
    setCandies(data); 
  }

  async function fetchFruitData() {
    setIsLoadingFruit(true);
    const data = await getFruit();
    setIsLoadingFruit(false);
    setfruits(data); 
  }

  useEffect(() => {
    fetchCandyData();
  }, []);

  useEffect(() => {
    fetchFruitData();
  }, []);

  return (
    <div className="App">
      <div className='candy-sec'>
        {
          isLoadingCandies ? Spinner : <CandyList candies={candies} />
        }
      </div>
      <div className='fruit-sec'>
        {
          isLoadingFruit ? Spinner : <FruitList fruits={fruits} />
        }
      </div>
    </div>
  );
}

export default App;
