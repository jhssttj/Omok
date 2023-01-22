import React from 'react';
import {useState} from 'react';
import {player1,player2} from './PlayerData';
import {themes} from './PlayerData';
import '../../styles/Player.css';
import {PlayerScreen} from './PlayerScreen';
import {ThemeScreen} from './ThemeScreen';
import {TopBar} from './TopBar';
import {BottomBar} from './BottomBar';

function MainScreen() {

  //Players
  const [p1, setP1] = useState(player1);
  const [p2, setP2] = useState(player2);

  //Pieces
  const [currentP1, setCurrentP1] =useState(player1.piece);
  const [currentP2, setCurrentP2] =useState(player2.piece);

  //Sprites
  const [currentS1, setCurrentS1] =useState(player1.sprite);
  const [currentS2, setCurrentS2] =useState(player2.sprite);

  //Theme
  const [currentT, setCurrentT] =useState(0);

  return (  
      <div className="mainScreen">
          <TopBar/>
          <div className="startScreen">
            <PlayerScreen p={p1} currentP={currentP1} setCurrentP={setCurrentP1} currentS={currentS1} setCurrentS={setCurrentS1}/>
            <ThemeScreen currentT={currentT} setCurrentT={setCurrentT}/>
            <PlayerScreen p={p2} currentP={currentP2} setCurrentP={setCurrentP2} currentS={currentS2} setCurrentS={setCurrentS2}/>
          </div>
          <BottomBar/>
      </div>
  );
}

export default MainScreen;
