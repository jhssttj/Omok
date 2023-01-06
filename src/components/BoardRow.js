import React from 'react';
import {BoardSquare} from './BoardSquare';
import '../styles/Board.css';

function BoardRow(props) {
  //Carry over x and row position value from props
  const x = props.x;
  const y = props.y;
  const value = props.value;

  //Function to render x squares to form within a y row
  const renderSquare = (x) => {
    let squares = [];
    for (let i=0; i<x; i++) {
      let className = "square"
      //Determine if square is at edge of the board
      if (value === 0) {
        className += " top";
      } 
      if (value === y-1) {
        className += " bot";
      }
      if (i === 0) {
        className += " left";
      }
      if (i === x-1) {
        className += " right";
      }
      squares.push(<BoardSquare className={className} x={i} y={value} key={i}/>);
    }
    return squares;
  };

  return (
    <div className= "row" value={value}>
      {renderSquare(x)}
    </div>
  );
}

export {BoardRow};
