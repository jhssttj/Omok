import React from 'react';
import '../../styles/Player.css';
import logo from '../../images/logo/logo.png'

function TopBar() {

  return (  
    <div className="topBar">
      <img className="logo" src={logo} alt="logo"/>
      <p className="topText">Maplestory Omok</p>
    </div>
  );
}

export {TopBar};
