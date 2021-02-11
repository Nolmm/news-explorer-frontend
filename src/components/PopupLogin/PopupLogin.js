import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'
import useFormWithValidation from '../Validation/Validation.js'
//переименовать в логин если будет время

function PopupLogin(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onSubmit() {
    props.onSubmit({
      password: password,
      email: email
    })
  }
  const {
    values,
    handleChange,
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
      buttonTitle="Войти" linkTitle="Зарегистрироваться" isOpen={props.isOpen} onClick={props.onInfoTooltip}
      onClose={props.onClose} onSubmit = { onSubmit } setEmail = { setEmail }
      setPassword = { setPassword } >
      <label className="popup__label">Email</label>
      <input type="email" className="popup__input" placeholder="Введите email" required name="email" onChange={handleChange} value={values.email || ''}></input>
      <span className="popup__error"></span>
      <label className="popup__label">Пароль</label>
      <input type="password" className="popup__input" placeholder="Введите пароль" name="password" required onChange={handleChange} value={values.password || ''}></input>
      <span className="popup__error"></span>
      <button type="submit" className={`${!isValid ?  'popup__submit-button_disabled' : 'popup__submit-button'}`}  disabled= {!isValid} onSubmit={handleSubmit}
      >Войти</button>
    </PopupWithForm>
  )

}

export default PopupLogin;