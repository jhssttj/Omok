import React from 'react';
import '../styles/Board.css';

function BoardSquare(props) {
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const placeStone = props.placeStone;
  const board = props.board;
  
  return (
    <div className={className} x={x} y={y} onClick={(event)=>{placeStone(event)}}>
      {board[y][x] === 1 &&
        <h1>P1</h1>
      }
      {board[y][x] === 2 &&
        <h1>P2</h1>
      }
    </div>
  );
}

export {BoardSquare};
