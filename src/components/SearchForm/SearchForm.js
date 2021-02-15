import './SearchForm.css';
import React from 'react';
import useFormWithValidation from '../Validation/Validation.js';
import {useRef} from 'react'

function SearchForm(
  // onSubmit, requestArticles
  props
) {
  const { values, handleChange } = useFormWithValidation();
  //показывает ошибку валидации
  const [visibleError, setVisibleErrorError] = React.useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.searchformInput) {
      setVisibleErrorError(true);
    } 
    // else {
    //   onSubmit(input.current.value);
    // }
  }

  function handleFocus() {
    setVisibleErrorError(false);
  }

const input = useRef(null);

   //поиск статей
  function find() {
    props.requestArticles (input.current.value)
  }

  


  

  return (
    <section className="searchform">
      <h1 className="searchform__title">Что творится в мире?</h1>
      <p className="searchform__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="searchform__form" onSubmit={handleSubmit} noValidate>
        <input
        ref={input}
        name="searchformInput"
        className={`searchform__input ${visibleError ? 'searchform__input_error' : ''}`}
        placeholder={visibleError ? 'Нужно ввести ключевое слово' : 'Введите ключевое слово'}
        autoComplete="on" required 
        onChange={handleChange}
        // keyword={input.current.value}
        onFocus={handleFocus}>
          
        </input>
        <button className="searchform__button" onClick={find}>Искать</button>
      </form>
    </section>
  )
}

export default SearchForm;