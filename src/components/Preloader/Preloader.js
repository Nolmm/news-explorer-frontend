import './Preloader.css';
import React from 'react';

function Preloader() {
  return (
    <section className="preloader">
      <i className="preloader__circle"></i>
        <p className="preloader__title">Идет поиск новостей...</p>
    </section>
  )
  
}

export default Preloader