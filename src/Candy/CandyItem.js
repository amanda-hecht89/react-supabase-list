import React from 'react';


export default function CandyItem({ name, type, date, photo }) {
  return (
    <div className="candy">
      <p>{name}</p> <hr></hr>
      <p>{type}</p><hr></hr>
      <p>{date}</p><hr></hr>
      <img src={`/Images/${photo}`} height={100} className="photos"/>
    </div>
  );
}
