import React from 'react';

export default function ActorItem({ name, birth_year, genre, movies }) {
  return (
    <div className="actor">
      <p> {name} </p><hr></hr>
      <p> born in {birth_year} </p><hr></hr>
      <p>  types of movies is {genre} </p><hr></hr>
      <p>  include: {movies} </p><hr></hr>
    </div>
  );
}
  
