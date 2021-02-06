import './SavedNews.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList.js'

function SavedNews(props) {
  return (
    <section className="savednews">
      <NewsCardList loggedIn={props.loggedIn}/>
    </section>
  )
  
}

export default SavedNews;