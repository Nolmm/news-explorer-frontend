import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation.js'
import { Link } from 'react-router-dom';

function Header(props) {
 

  return (
    <header className={`header ${props.isOpenMob ? 'header__background' : ''} ${props.theme ? 'header_saved-news' : 'header_main'}`}>
      <Link  className="header__link" to="/"><div to="/" className={`${props.theme ? 'header__logo' : 'header__logo-main'} ${props.isOpenMob ? 'header__logo-main' : 'header__logo' }`}>NewsExplorer</div>
      </Link>
      <button type="button" onClose={props.onClose} onClick={props.open} className={`header__burger ${props.loggedIn ? 'header__burger-img_black' : 'header__burger-img_white'} ${props.isOpenMob ? 'header__burger-close' : ''}`}></button>
      <Navigation 
      theme={props.theme}
      loggedIn={props.loggedIn} 
      onClick={props.onClick}
      isOpenMob={props.isOpenMob}
      ></Navigation>
    </header>
  );
}

export default Header;


