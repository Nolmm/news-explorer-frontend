import './NotFound.css';
import React from 'react';
import notfound from '../../images/notfound.svg'

function NotFound() {
  return (
    <section className="notfound">
      <img className="notfound__image" src={notfound} alt="ничего не найдено"></img>
      <h3 className="notfound__title">Ничего не найдено</h3>
      <p className="notfound__subtitle">К сожалению по вашему запросу</p>
      <p className="notfound__subtitle">ничего не найдено.</p>
    </section>
  )
}

export default NotFound;