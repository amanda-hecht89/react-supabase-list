import React from 'react';

export default function FruitItem({ name, sides, example, photo }) {
  return (
    <div className="shape">
      <p> {name} </p><hr></hr>
      <p>{sides} sides </p><hr></hr>
      <p> {example} </p><hr></hr>
      <img src={`/Images/${photo}`} height={100} className="photos"/>
    </div>
  );
}
