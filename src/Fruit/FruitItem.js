import React from 'react';

export default function FruitItem({ name, origin, color, photo }) {
  return (
    <div className="fruit">
      <p> {name} </p> <hr></hr>
      <p> {color} </p><hr></hr>
      <p> originally from {origin}</p><hr></hr>
      <img src={`/Images/${photo}`} height={100} className="photos"/>
    </div>
  );
}
  
