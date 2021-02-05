import './PopupWithForm.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-btn" onClick={props.onClose} ></button>
        <form name={props.formName} className="popup__form" onSubmit={props.onSubmit}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__submit-button">{props.buttonTitle}</button>
          <p className="popup__or">или<Link onClick={props.onClick} className="popup__link" to={props.route}>{props.linkTitle}</Link></p>
        </form>
      </div>

    </section>
  )

}

export default PopupWithForm;

