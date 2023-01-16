import React from 'react';
import {useState} from 'react';
import {pieces} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

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
      <FaRegArrowAltCircleLeft className="button left" onClick={changePiece}/>
      <FaRegArrowAltCircleRight className="button left" onClick={changePiece}/>
      {pieceRender}
    </div>
  );
}

export {PlayerPieceScreen};
