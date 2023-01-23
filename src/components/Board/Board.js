import React from 'react';
import {useState, useEffect} from 'react';
import {colLength,boardArr} from './BoardData';
import {updateBoard, checkWin, checkDraw} from './BoardHelper';
import {BoardRow} from './BoardRow';
import '../../styles/Board.css';
import{pieces} from '../MainScreen/PlayerData';

function Board(props) {
  //Set props as constant
  const info = props.info;
  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);
  //Set Current Player Turn
  const [player, setPlayer] = useState(2);
  //Set Players Piece
  const piece = {
    p1: pieces[info.p1],
    p2: pieces[info.p2]
  };

  //Check if a win condition has been rendered
  useEffect(() => {
    if(checkWin(board)) {
      alert(`Winnier is ${player}`);
    }
    if(checkDraw(board)) {
      alert('draw');
    }

    //Set to next player after move has been made.
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  }
  ,[board])

  const placePiece = (event) => {

    event.preventDefault();
    
    //Get current square x and y coordinates
    const x = Number(event.target.getAttribute("x"));
    const y = Number(event.target.getAttribute("y"));

    //Update board
    setBoard(() => {
      return updateBoard(board,player,x,y)
    })
  };
  

 //Function to render y rows to form within on the board
 const renderRows = (colLength) => {
  let rows = [];
  for (let i=0; i<colLength; i++) {
    rows.push(<BoardRow value={i} key={i} placePiece={placePiece} board={board} piece={piece} player={player}/>)
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
