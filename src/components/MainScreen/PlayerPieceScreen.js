import React from 'react';
import {useState} from 'react';
import {pieces} from './PlayerData';

function PlayerPieceScreen(props) {
  const [current, setCurrent] =useState(props.player===1?pieces[0]:pieces[1]);

  //Function to change between pieces
  const changePiece = () => {
    console.log("Hi");
  }

  //Render all piece image
  const pieceRender = pieces.map((image,index) => {
    return (
      <div key={index}>
        <img src={image} alt='pieceImage'/>
      </div>
    )
  })

  return (
    <div>
      <button type="button" className = "button left" onClick={changePiece}>Left</button>
      <button type="button" className = "button right" onClick={changePiece}>Right</button>
      <i class="fa-solid fa-question-circle"></i>
      {pieceRender}
    </div>
  );
}

export {PlayerPieceScreen};
