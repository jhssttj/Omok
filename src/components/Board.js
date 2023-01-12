import React from 'react';
import {useState, useEffect} from 'react';
import {colLength,boardArr} from '../backend/BoardData';
import {updateBoard, checkBoard} from '../helpers/BoardHelper';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';
import piece1 from '../images/piece-black.png';
import piece2 from '../images/piece-white.png';



function Board() {
  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);
  //Set Current Player Turn
  const [player, setPlayer] = useState(1);
  //Set Players Piece
  const piece = {
    p1: piece1,
    p2: piece2
  };

  //Check if a win condition has been rendered
  useEffect(() => {
    // checkBoard(board)
    console.log("trig")
  }
    ,[board])

  const placeStone = (event) => {

    event.preventDefault();
    
    //Get current square x and y coordinates
    const x = event.target.getAttribute("x");
    const y = event.target.getAttribute("y");

    //Update board
    setBoard(() => {
      return updateBoard(board,player,x,y)
    })

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
    rows.push(<BoardRow value={i} key={i} placeStone={placeStone} board={board} piece={piece} player={player}/>)
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
