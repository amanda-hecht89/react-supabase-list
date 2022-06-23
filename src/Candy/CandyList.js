import React from 'react';
import CandyItem from './CandyItem';


export default function CandyList({ candies = [], }) {
  return (
    <div className='candy-list'>
      {
        candies.map((candy, i) => {
          return <CandyItem {...candy} key={candy.name + i + candy.id}/>;
        })
      }
    </div>
  );
}



