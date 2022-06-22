import React from 'react';
import FruitItem from './FruitItem';

export default function FruitList({ fruits = [], }) {
  return (
    <div className='fruit-list'>
      {
        fruits.map((fruit, i) => {
          return <FruitItem {...fruit} key={fruit.name + i + fruit.id}/>;
        })
      }
    </div>
  );
}
  

