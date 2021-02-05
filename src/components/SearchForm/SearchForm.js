import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <section className="searchform">
      <h1 className="searchform__title">Что творится в мире?</h1>
      <p className="searchform__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className="searchform__form">
        <input className="searchform__input"></input>
        <button className="searchform__button">Искать</button>
      </form>
    </section>
  )
}

export default SearchForm;