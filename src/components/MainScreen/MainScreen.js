import React from 'react';
import {useState} from 'react';
import {player1,player2} from './PlayerData';
import {themes} from './PlayerData';
import themeMain from '../../images/background/mainScreen.png'
import '../../styles/Player.css';
import {PlayerScreen} from './PlayerScreen';
import {ThemeScreen} from './ThemeScreen';
import {TopBar} from './TopBar';
import {BottomBar} from './BottomBar';
import Board from '../Board/Board';
import { soundEffects } from './SoundData';
import { bgm } from './SoundData';

function MainScreen() {

  //Pieces
  const [currentP1, setCurrentP1] =useState(player1.piece);
  const [currentP2, setCurrentP2] =useState(player2.piece);

  //Sprites
  const [currentS1, setCurrentS1] =useState(player1.sprite);
  const [currentS2, setCurrentS2] =useState(player2.sprite);

  //Theme
  const [currentT, setCurrentT] =useState(0);

  //Compile Info for submit
  const info = {
    p1: currentP1,
    p2: currentP2,
    s1: currentS1,
    s2: currentS2,
    theme:currentT,
  }

  //Bring start music
  const startSound = () => {
    const start = new Audio(soundEffects.start);
    start.volume=0.2;
    start.play();
  }

  const bgmSound = () => {
    const bgmMusic = new Audio(bgm[currentT])
    bgmMusic.volume=0.2;
    bgmMusic.play();
  }

  //Start game condition
  const [start, setStart] =useState(false);
  const [error, setError] = useState(false)
  const startGame = () => {
    setError(false);
    if (currentP1===currentP2) {
      setError(true);
      return;
    }
    setStart(true);
    startSound();
    bgmSound();
  }

  return (  
      <div className="mainScreen"
           style={{backgroundImage:(start?`url(${themes[currentT]})`:`url(${themeMain})`)}}
      >
          <TopBar/>
          <div className="startScreen">
            <PlayerScreen p={player1} currentP={currentP1} setCurrentP={setCurrentP1} currentS={currentS1} setCurrentS={setCurrentS1} start={start}/>
            {start
              ?<Board info={info}/>
              :<ThemeScreen currentT={currentT} setCurrentT={setCurrentT} startGame={startGame} error={error}/>
            }
            {/* <ThemeScreen currentT={currentT} setCurrentT={setCurrentT} info={info} setStart={setStart}/> */}
            <PlayerScreen p={player2} currentP={currentP2} setCurrentP={setCurrentP2} currentS={currentS2} setCurrentS={setCurrentS2} start={start}/>
          </div>
          <BottomBar/>
      </div>
  );
}

export default MainScreen;
