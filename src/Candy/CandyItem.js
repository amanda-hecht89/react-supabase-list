import React from 'react';


export default function CandyItem({ name, type, date, photo }) {
  return (
    <div className="candy">
      <p>{name}</p>
      <p>{type}</p>
      <p>{date}</p>
      <img src={`/Images/${photo}`} height={100}/>



    </div>
  );
}
