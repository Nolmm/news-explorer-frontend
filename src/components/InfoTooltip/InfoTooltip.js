import './InfoTooltip.css';
import React from 'react';
import { Link} from 'react-router-dom';

function InfoTooltip(props) {
  return (
    <section className={`popup ${props.isOpen ?  'popup_opened' : ''}`}>
      <div className="popup__container popup__container-tooltip">
      <button type="button" className="popup__close" onClick={props.onClose}></button>
      <h2 className="popup__title popup__title-tooltip">Пользователь успешно зарегистрирован!</h2>
      <Link onClick={props.onClick} className="popup__link popup__link-tooltip" >Войти</Link>
      </div>
      </section>
  );
}

export default InfoTooltip;
