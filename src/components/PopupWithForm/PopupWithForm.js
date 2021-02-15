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
          
          
        </form>
      </div>

    </section>
  )

}

export default PopupWithForm;

