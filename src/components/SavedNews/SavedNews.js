import './SavedNews.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList.js'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'
import NewsCard from '../NewsCard/NewsCard.js'
import mainApi from '../../utils/MainApi.js'

function SavedNews(props) {
  React.useEffect(() => {
    props.theme(true);
  }, []);
  
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    mainApi.getArticles(jwt)
      .then(res => props.setSaved(res))
      .catch(err => console.log(err))
  }, [])

  // const deleteArticles = (id) => {
  //   const jwt = localStorage.getItem('jwt');
  //   props.deleteArticle(jwt, id)
  //     .then((res) => {
  //       props.setSaved(props.articles.filter(item => item._id !== props.id));
  //     })
  //     .catch(err => console.log(err))

  // }

  return (
    <section className="savednews">
      <SavedNewsHeader articles={props.articles}/>
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
      deleteArticle={props.deleteArticle}
      data={props.data}
      />)}
      </ul>
      {/* <NewsCardList loggedIn={props.loggedIn} data={props.data}/> */}
    </section>
  )
  
}

export default SavedNews;