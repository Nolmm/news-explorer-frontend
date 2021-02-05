import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'

function PopupLogin(props) {
  return (
    <PopupWithForm name="login" title="Вход" formName="login-form"
      buttonTitle="Войти" linkTitle="Зарегистрироваться" isOpen={props.isOpen} onClick={props.onInfoTooltip}
      onClose={props.onClose}>
      <label className="popup__label">Email</label>
      <input type="email" className="popup__input" placeholder="Введите email" required></input>
      <span className="popup__error"></span>
      <label className="popup__label">Пароль</label>
      <input type="password" className="popup__input" placeholder="Введите пароль" required></input>
      <span className="popup__error"></span>
    </PopupWithForm>
  )

}

export default PopupLogin;