import './Results.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList.js'

function Results(props) {
  return (
    <section className="results">
      <h2 className="results__title">Результаты поиска</h2>
      <NewsCardList
        data={props.data}
        createArticle={props.createArticle}
        deleteArticle={props.deleteArticle}
        loggedIn={props.loggedIn}
        onClick={props.onClick}
        setSaved={props.setSaved}
      />
    </section>
  )
}

export default Results
