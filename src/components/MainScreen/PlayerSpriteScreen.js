import React from 'react';
import {useState} from 'react';
import {sprites} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

function PlayerSpriteScreen(props) {
  const [current, setCurrent] =useState(props.player===1?0:1);

  //Function to change between pieces
  const nextPiece = () => {
    setCurrent(current===sprites.length-1?0:current+1);
  }
  const prevPiece = () => {
    setCurrent(current===0?sprites.length-1:current-1);
  }


  return (
    <div className="screen">
      <FaRegArrowAltCircleLeft className="button left" onClick={prevPiece}/>
      <img src={sprites[current]} alt='pieceImage' className="image"/>
      <FaRegArrowAltCircleRight className="button left" onClick={nextPiece}/>
    </div>
  );
}

export {PlayerSpriteScreen};
