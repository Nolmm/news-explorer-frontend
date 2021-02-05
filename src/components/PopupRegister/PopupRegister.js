import './PopupRegister.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'

function PopupRegister(props) {
  return (
    <PopupWithForm name="register" title="Регистрация" formName="register-form"
      buttonTitle="Зарегистрироваться" linkTitle="Войти" onClick={props.onClick} isOpen={props.isOpen} onPopupRegister={props.onPopupRegister}
      onClose={props.onClose} onInfoTooltip={props.onInfoTooltip}
    >
      <label className="popup__label">Email</label>
      <input type="email" className="popup__input" placeholder="Введите email" required></input>
      <span className="popup__error"></span>
      <label className="popup__label">Пароль</label>
      <input type="password" className="popup__input" placeholder="Введите пароль" required></input>
      <span className="popup__error"></span>
      <label className="popup__label">Имя</label>
      <input type="text" className="popup__input" placeholder="Введите своё имя" required></input>
      <span className="popup__error"></span>

    </PopupWithForm>
  )

}

export default PopupRegister;