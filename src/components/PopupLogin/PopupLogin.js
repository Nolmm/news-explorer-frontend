import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'
import useFormWithValidation from '../Validation/Validation.js'
//переименовать в логин если будет время

function PopupLogin(props) {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');


  
  // function onSubmit() {
  //   props.onSubmit({
  //     password: password,
  //     email: email
  //   })
  // }
  // const [resError, setResError] = React.useState('');

  //смена попапа
  function popupToggle() {
    props.onClose();
    props.onRegister();
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
    props.handleLogin({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  }

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen]);
  
  

  return (
    <PopupWithForm name="login" title="Вход" formName="login-form" 
      buttonTitle="Войти"  
      isOpen={props.isOpen} onClick={props.onInfoTooltip}
      onClose={props.onClose} 
      // setEmail = { setEmail }
      // setPassword = { setPassword } 
      onSubmit={handleSubmit}>
      <label className="popup__label">Email</label>
      <input type="email" className="popup__input" placeholder="Введите email" required name="email" onChange={handleChange}
      value={values.email || ''}
      >

      </input>
      <span className="popup__error">{errors.email}</span>
      <label className="popup__label">Пароль</label>
      <input type="password" className="popup__input" placeholder="Введите пароль" name="password" required onChange={handleChange}
      value={values.password || ''}
      ></input>
      <span className="popup__error">{errors.password}</span>
      <span className="popup__error popup__error_button">{props.error.login}</span>
      <button type="submit" className={`${!isValid ?  'popup__submit-button_disabled' : 'popup__submit-button'}`}  disabled= {!isValid} 
      >Войти</button>
      <p className="popup__or">или<span onClick={popupToggle} className="popup__link">Зарегестрироваться</span></p>
    </PopupWithForm>
  )

}

export default PopupLogin;