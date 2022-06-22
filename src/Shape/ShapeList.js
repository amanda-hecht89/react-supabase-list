import React from 'react';
import ShapeItem from './ShapeItem';

export default function ShapeList({ shapes = [], }) {
  return (
    <div className='shape-list'>
      {
        shapes.map((shape, i) => {
          return <ShapeItem {...shape} key={shape.name + i + shape.id}/>;
        })
      }
    </div>
  );
}

