import React from 'react';
import {useState} from 'react';
import {colLength,boardArr} from '../backend/BoardData';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';



function Board() {

 //Function to render y rows to form within on the board
 const renderRows = (colLength) => {
  let rows = [];
  for (let i=0; i<colLength; i++) {
    rows.push(<BoardRow value={i} key={i}/>)
  }
  return rows;
}

  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);

  return (
    <div className= "board">
      {renderRows(colLength)}
    </div>
  );
}

export default Board;
