import './SavedNews.css';
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'
import NewsCard from '../NewsCard/NewsCard.js'

function SavedNews(props) {
  //смена темы хедера
  React.useEffect(() => {
    props.theme(true);
  }, []);

  

  function deleteArticle(id) {
    props.deleteArticle(id)
    
  }

  
  return (
    <section className="savednews">
      <SavedNewsHeader articles={props.articles} />
      <ul className="newscard__list">
        {props.saved.map(el =>
          <NewsCard articles={true}
            key={el._id}
            id={el._id}
            loggedIn={props.loggedIn}
            keyword={el.keyword}
            image={el.image}
            date={el.date}
            url={el.link}
            title={el.title}
            text={el.text}
            source={el.source}
            saved={props.saved}
            onCardDelete={() => deleteArticle(el._id)}
          />)}
      </ul>
    </section>
  )

}

export default SavedNews;