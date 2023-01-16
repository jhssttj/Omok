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
      <h1>Sprite</h1>
      <div className="subScreen">
        <FaRegArrowAltCircleLeft className="button left" onClick={prevPiece}/>
        <img src={sprites[current]} alt='pieceImage' className="imageSprite"/>
        <FaRegArrowAltCircleRight className="button right" onClick={nextPiece}/>
      </div>
    </div>
  );
}

export {PlayerSpriteScreen};
