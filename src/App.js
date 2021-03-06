import { useState, useEffect } from 'react';
import { getCandy } from './services/fetch-utlis';
import CandyList from './Candy/CandyList';
import { getFruit } from './services/fetch-utlis';
import FruitList from './Fruit/FruitList';
import { getShape } from './services/fetch-utlis';
import ShapeList from './Shape/ShapeList';
import { getActor } from './services/fetch-utlis';
import ActorList from './Actor/ActorList';

import Spinner from './Spinner';
import './App.css';
// import your arrays here

function App() {

  const [candies, setCandies] = useState([]);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);
  const [fruits, setFruits] = useState([]);
  const [isLoadingFruit, setIsLoadingFruit] = useState(false);
  const [shapes, setShape] = useState([]);
  const [isLoadingShape, setIsLoadingShape] = useState(false);
  const [actors, setActors] = useState([]);
  const [isLoadingActors, setIsLoadingActors] = useState(false);
  

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
    setFruits(data); 
  }

  async function fetchShapeData() {
    setIsLoadingShape(true);
    const data = await getShape();
    setIsLoadingShape(false);
    setShape(data); 
  }
  async function fetchActorData() {
    setIsLoadingActors(true);
    const data = await getActor();
    setIsLoadingActors(false);
    setActors(data); 
  }

  useEffect(() => {
    fetchCandyData();
  }, []);

  useEffect(() => {
    fetchFruitData();
  }, []);

  useEffect(() => {
    fetchShapeData();
  }, []);

  useEffect(() => {
    fetchActorData();
  }, []);

  return (
    <div className="App">
      <header><h1>WELCOME</h1></header>
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
      <div className='shape-sec'>
        {
          isLoadingShape ? Spinner : <ShapeList shapes={shapes} />
        }
      </div>
      <div className='actor-sec'>
        {
          isLoadingActors ? Spinner : <ActorList actors={actors} />
        }
      </div>
    </div>
  );
}

export default App;
