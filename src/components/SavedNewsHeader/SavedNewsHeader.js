import './SavedNewsHeader.css';
import React from 'react';

function SavedNewsHeader () {
  return (
    <section className="savednewsheader">
      <h2 className="savednewsheader__title">Сохранённые статьи</h2>
      <p className="savednewsheader__subtitle">Грета, у вас 5 сохранённых статей</p>
      <p className="savednewsheader__keywords">По ключевым словам: <span className="savednewsheader__keyword">Природа, Тайга</span>
      &nbsp;и&nbsp;<span className="savednewsheader__keyword">2-м другим</span></p>
    </section>
  )
}

export default SavedNewsHeader;
