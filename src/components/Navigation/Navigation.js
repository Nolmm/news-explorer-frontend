import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Navigation(props) {
  const { name } = React.useContext(CurrentUserContext);
  const [userName, setUserName] = React.useState('');
  React.useEffect(() => {
    setUserName(name);
  }, [name])

  return (
    <nav className={` navigation ${props.isOpenMob ? 'navigation__mobile-opened' : props.theme ? 'navigation__black' : ''}`}>
      <ul className="navigation__items">
        <li><Link to="/" className="navigation__item navigation__item_main">Главная</Link></li>
        <li>{props.loggedIn || props.isOpenMob ? <Link to="/saved-news" className={`navigation__item ${props.loggedIn && props.theme ? 'navigation__item_saved-news' : ''}`}>Сохраненные статьи</Link> : ''}</li>
        <li>{props.loggedIn ?
          <button onClick={props.handleLogout} className={`navigation__button ${props.theme ? 'navigation__button_border-black' : 'navigation__button_border-white'}`}>{userName} {props.theme ? <svg className="navigation__logaut navigation__logaut_mobile" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z" fill="#1A1B22" />
          </svg> : <svg className="navigation__logaut" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z" fill="#fff" />
            </svg>}
          </button> : <button onClick={props.onClick} className={` navigation__button_main ${props.theme ? '' : 'navigation__button_border-white'}`}>{'Авторизоваться'}</button>}</li>
      </ul>
    </nav>
  )
}

export default Navigation;
