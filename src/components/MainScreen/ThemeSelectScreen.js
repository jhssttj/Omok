import React from 'react';
import {useState} from 'react';
import {themes} from './PlayerData';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

function ThemeSelectScreen(props) {
  
  const currentT=props.currentT;
  const setCurrentT=props.setCurrentT;

  //Function to change between pieces
  const nextPiece = () => {
    setCurrentT(currentT===themes.length-1?0:currentT+1);
  }
  const prevPiece = () => {
    setCurrentT(currentT===0?themes.length-1:currentT-1);
  }


  return (
    <div className="screen" id="themeScreen">
      
      <div className="subScreen">
        <FaRegArrowAltCircleLeft className="button left" onClick={prevPiece}/>
        <div className="themeHolder">
          <img src={themes[currentT]} alt='themeImage' className="imageTheme"/>
        </div>
        <FaRegArrowAltCircleRight className="button right" onClick={nextPiece}/>
      </div>
      {props.error
        ?<p className="error">PLAYERS PIECE CAN NOT BE SAME</p>
        :<p className="error"></p> 
      }
    </div>
  );
}

export {ThemeSelectScreen};
