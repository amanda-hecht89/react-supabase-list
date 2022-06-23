import React from 'react';
import ActorItem from './ActorItem';

export default function ActorList({ actors = [] }) {
  return (
    <div className='actor-list'>
      {
        actors.map((actor, i) => {
          return <ActorItem {...actor} key={actor.name + i + actor.id}/>;
        })
      }
    </div>
  );
}