import React from 'react';
import {useState} from 'react';
import {initializeBoard} from '../helpers/BoardHelper';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';



function Board() {
  //Intialize Board X and Y Size (Played on 15x15)
  const x = 15;
  const y = 15;

  //Initalize Board Array
  const boardArr = initializeBoard(x,y);

 //Function to render y rows to form within on the board
 const renderRows = (y) => {
  let rows = [];
  for (let i=0; i<y; i++) {
    rows.push(<BoardRow x={x} y={y} rowValue={i}/>)
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
