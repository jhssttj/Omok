import React from 'react';
import {BoardSquare} from './BoardSquare';
import '../styles/Board.css';

function BoardRow(props) {
  //Carry over x and row position value from props
  const x = props.x;
  const y = props.y;
  const rowValue = props.rowValue;

  //Function to render x squares to form within a y row
  const renderSquare = (x) => {
    let squares = [];
    for (let i=0; i<x; i++) {
      let className = "square"
      if (rowValue === 0 || rowValue === y-1) {
        className += " rowEdge";
      } 
      if (i === 0 || i === x-1) {
        className += " colEdge";
      }
      squares.push(<BoardSquare className={className}/>);
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
