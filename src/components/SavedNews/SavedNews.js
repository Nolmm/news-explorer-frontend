import './SavedNews.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList.js'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'

function SavedNews(props) {
  
  return (
    <section className="savednews">
      <SavedNewsHeader />
      <NewsCardList loggedIn={props.loggedIn} data={props.data}/>
    </section>
  )
  
}

export default SavedNews;