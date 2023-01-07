import React from 'react';
import {useState} from 'react';
import {colLength,boardArr} from '../backend/BoardData';
import {updateBoard} from '../helpers/BoardHelper';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';



function Board() {
  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);
  //Set Current Player Turn
  const [player, setPlayer] = useState(1);
  //Declare if square is empty or have a stone
  const [piece, setPiece] = useState("");

  const placeStone = (event) => {
    console.log(event.target.getAttribute("x"));
    console.log(event.target.getAttribute("y"));
    const x = event.target.getAttribute("x");
    const y = event.target.getAttribute("y");
    console.log("Current player turn", player);

    //Update board
    setBoard((prev) => {
      return[...prev, updateBoard(board, player, x, y)]
    })
    console.log(board);
    //Set to next player after move has been made.
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  };
  


 //Function to render y rows to form within on the board
 const renderRows = (colLength) => {
  let rows = [];
  for (let i=0; i<colLength; i++) {
    rows.push(<BoardRow value={i} key={i} placeStone={placeStone} piece={piece}/>)
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
