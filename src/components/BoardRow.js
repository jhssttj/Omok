import React from 'react';
import {BoardSquare} from './BoardSquare';
import '../styles/Board.css';

function BoardRow(props) {
  //Carry over x value from props
  const x = props.x;

  //Function to render x squares to form within a y row
  const renderSquare = (x) => {
    let squares = [];
    for (let i=0; i<x; i++) {
      squares.push(<BoardSquare/>)
    }
    return squares;
  };

  return (
    <div className= "row">
      {renderSquare(x)}
    </div>
  );
}

export {BoardRow};
