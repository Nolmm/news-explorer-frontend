import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';


function NewsCardList(props) {
  const [index, setIndex] = React.useState(6);
  const [articles, setArticles] = React.useState(props.data.slice(0, 3));
  const showMore = () => {
    setIndex(array => array += 3);
    setArticles(props.data.slice(0, index));
  }

  React.useEffect(() => {
    setArticles(props.data.slice(0, 3));
  }, [props.data])


  function addArticleClick(articleId) {
    props.createArticle({
        title: articles[articleId].title,
        text: articles[articleId].description,
        date: articles[articleId].publishedAt,
        source: articles[articleId].source.name,
        link: articles[articleId].url,   
        image: articles[articleId].urlToImage,
        keyword : articles[articleId].keyword
    })
    // localStorage.setItem('Saved', JSON.stringify(setArticles))
    // localStorage.getItem('Saved', JSON.stringify(setArticles))
}

  function deleteArticle(id) {
    props.deleteArticle(props.id)
    
  }

  return (
    <div>
      <ul className="newscard__list">
        {articles.map((item, index) => <NewsCard
          id={index}
          key={item._id}
          keyword={item.keyword}
          image={item.urlToImage}
          date={item.publishedAt}
          title={item.title}
          text={item.description}
          source={item.source.name}
          loggedIn={props.loggedIn}
          url={item.url}
          onClick={props.onClick}
          onDelete={() => deleteArticle(item.id)}
          addArticleClick={addArticleClick}
          // articles={articles}
        />)}
      </ul>
      <div className="results__button_conteiner">
        {props.data.length !== articles.length ? <button className="results__button" onClick={showMore}>Показать еще</button> : ''}
      </div>
    </div>
  )

}

export default NewsCardList;