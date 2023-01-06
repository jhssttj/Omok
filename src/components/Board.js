import React from 'react';
import {useState} from 'react';
import {x,y,boardArr} from '../backend/BoardData';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';



function Board() {

 //Function to render y rows to form within on the board
 const renderRows = (y) => {
  let rows = [];
  for (let i=0; i<y; i++) {
    rows.push(<BoardRow x={x} y={y} value={i} key={i}/>)
  }
  return rows;
}

  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);

  return (
    <div className= "board">
      {renderRows(y)}
    </div>
  );
}

export default Board;
