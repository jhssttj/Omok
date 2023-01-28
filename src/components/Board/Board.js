import React from 'react';
import {useState, useEffect} from 'react';
import {colLength,boardArr} from './BoardData';
import {updateBoard, checkWin, checkDraw} from './BoardHelper';
import {BoardRow} from './BoardRow';
import '../../styles/Board.css';
import{pieces} from '../MainScreen/PlayerData';
import{sprites} from '../MainScreen/PlayerData';
import { WinnerScreen } from '../MainScreen/WinnerScreen';
import { DrawScreen } from '../MainScreen/DrawScreen';
import { soundEffects } from '../MainScreen/SoundData';

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
  //Set Player Sprite
  const sprite = {
    s1: sprites[info.s1],
    s2: sprites[info.s2]
  }
  //Make sound function
  const placeSound = () => {
    new Audio(soundEffects.place).play();
  }
  const winSound = () => {
    new Audio(soundEffects.win).play();
  }
  const drawSound = () => {
    new Audio(soundEffects.draw).play();
  }
  //Set Winner/Draw Render
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const [gameOver, setOver] = useState(false);

  //Check if a win condition has been rendered
  useEffect(() => {
    if(checkWin(board)) {
      player===1
        ?setWinner(["Player 1",sprite.s1])
        :setWinner(["Player 2",sprite.s2])
      winSound();  
      setOver(true);  
    }
    if(checkDraw(board)) {
      setDraw(true);
      drawSound();
      setOver(true);  
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
    placeSound();
  };
  

 //Function to render y rows to form within on the board
 const renderRows = (colLength) => {
  let rows = [];
  for (let i=0; i<colLength; i++) {
    rows.push(<BoardRow value={i} key={i} placePiece={placePiece} board={board} piece={piece} player={player} gameOver={gameOver}/>)
  }
  return rows;
}


  return (
    <div className= "board">
      {renderRows(colLength)}
      {winner
        ?<WinnerScreen winner={winner}/>
        :<></>
      }
      {draw
        ?<DrawScreen/>
        :<></>
      }
    </div>
  );
}

export default Board;
