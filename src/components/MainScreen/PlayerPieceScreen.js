import React from 'react';
import {useState} from 'react';
import {pieces} from './PlayerData';

function PlayerPieceScreen(props) {
  
  //Render all piece image
  const pieceRender = pieces.map((image,index) => {
    return (
      <div>
        <img src={image} alt='pieceImage'/>
      </div>
    )
  })

  return (
    <div>
      {pieceRender}
    </div>
  );
}

export {PlayerPieceScreen};
