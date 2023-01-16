import React from 'react';
import {useState} from 'react';
import {pieces} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

function PlayerPieceScreen(props) {
  const [current, setCurrent] =useState(props.player===1?0:1);

  //Function to change between pieces
  const nextPiece = () => {
    setCurrent(current===pieces.length-1?0:current+1);
  }
  const prevPiece = () => {
    setCurrent(current===0?pieces.length-1:current-1);
  }


  return (
    <div className="screen">
      <FaRegArrowAltCircleLeft className="button left" onClick={prevPiece}/>
      <img src={pieces[current]} alt='pieceImage' className="image"/>
      <FaRegArrowAltCircleRight className="button left" onClick={nextPiece}/>
    </div>
  );
}

export {PlayerPieceScreen};
