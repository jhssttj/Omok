import React from 'react';
import {useState} from 'react';
import {colLength,boardArr} from '../backend/BoardData';
import {placeStone} from '../helpers/BoardHelper';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';



function Board() {
  const placeStone = (event) => {
    console.log("hi")
    console.log(event.target.getAttribute("x"));
  };
  
  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);


 //Function to render y rows to form within on the board
 const renderRows = (colLength) => {
  let rows = [];
  for (let i=0; i<colLength; i++) {
    rows.push(<BoardRow value={i} key={i} placeStone={placeStone}/>)
  }
  return rows;
}


  return (
    <div className= "board">
      {renderRows(colLength)}
    </div>
  );
}

export default Board;
