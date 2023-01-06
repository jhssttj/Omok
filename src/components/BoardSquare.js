import React from 'react';
import '../styles/Board.css';
import {placeStone} from '../helpers/BoardHelper';

function BoardSquare(props) {
  
  const className = props.className;
  const value = props.value;
  return (
    <div className={className} value={value} onClick={placeStone}></div>
  );
}

export {BoardSquare};
