import React from 'react';
import '../styles/Board.css';
import {placeStone} from '../helpers/BoardHelper';

function BoardSquare(props) {
  
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const val = props.val
  
  return (
    <div className={className} val={val} x={x} y={y} onClick={placeStone}>
      {val}
    </div>
  );
}

export {BoardSquare};
