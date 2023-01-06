import React from 'react';
import '../styles/Board.css';
import {placeStone} from '../helpers/BoardHelper';

function BoardSquare(props) {
  
  const className = props.className;
  const x = props.x;
  const y = props.y;
  return (
    <div className={className} x={x} y={y} onClick={placeStone}></div>
  );
}

export {BoardSquare};
