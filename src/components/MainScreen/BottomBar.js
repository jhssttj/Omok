import React from 'react';
import '../../styles/Player.css';
import logo from '../../images/logo/logo.png'

function BottomBar() {

  return (  
    <div className="BottomBar">
      <a className="botText" href="https://github.com/jhssttj">&copy; Kevin Lee</a>
      <p className="botText">All sprites, images and sound belongs to &copy; Nexon and used under fair use</p>
    </div>
  );
}

export {BottomBar};
