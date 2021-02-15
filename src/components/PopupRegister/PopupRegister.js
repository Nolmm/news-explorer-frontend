import './PopupRegister.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'
import useFormWithValidation from '../Validation/Validation.js'

function PopupRegister(props) {
  // const [email, setEmail] = React.useState('');
  //   const [password, setPassword] = React.useState('');
  //   const [name, setName] = React.useState('');
  //   function onSubmit() {
  //     props.onSubmit({
  //         password: password,
  //         email: email,
  //         name: name
  //     })
  // } 
  //смена попапа
  function popupToggle() {
    props.onClose();
    props.onLogin();
  }


  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegister({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  }

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen]);

  return (
    <PopupWithForm name="register" title="Регистрация" formName="register-form"
      
      onClick={props.onClick} isOpen={props.isOpen} onPopupRegister={props.onPopupRegister}
      onClose={props.onClose} onSubmit={handleSubmit}
    >
      <label className="popup__label">Email</label>
      <input type="email" className="popup__input" placeholder="Введите email" required name="email" onChange={handleChange} value={values.email || ''}></input>
      <span className="popup__error">{errors.email}</span>
      <label className="popup__label">Пароль</label>
      <input type="password" className="popup__input" placeholder="Введите пароль" required name="password" onChange={handleChange} value={values.password || ''}></input>
      <span className="popup__error">{errors.password}</span>
      <label className="popup__label">Имя</label>
      <input onChange={handleChange} value={values.name || ''} type="text" className="popup__input" placeholder="Введите своё имя" required name="name" minLength="3" maxLength="9"></input>
      <span className="popup__error">{errors.name}</span>
      <span className="popup__error popup__error_button">{props.error.register}</span>
      <button type="submit" className={`${!isValid ?  'popup__submit-button_disabled' : 'popup__submit-button'}`}  disabled= {!isValid} 
      >Зарегистрироваться</button>
      <p className="popup__or">или<span onClick={popupToggle} className="popup__link">Войти</span></p>
    </PopupWithForm>
  )

}

export default PopupRegister;