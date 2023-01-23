import React from 'react';
import {ThemeSelectScreen} from './ThemeSelectScreen';
import '../../styles/Player.css';

function ThemeScreen(props) {

  return (  
    <div className="themeScreen">
      <h1 className='themeHeading'>Theme</h1>
      <ThemeSelectScreen currentT={props.currentT} setCurrentT={props.setCurrentT}/>
      <button className="start" onClick={()=>props.startGame()}>PLAY</button>
    </div>
  );
}

export {ThemeScreen};
