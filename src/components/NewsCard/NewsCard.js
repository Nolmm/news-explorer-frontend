import './NewsCard.css';
import React from 'react';

function NewsCard(props) {
  // меняет формат даты, приходящей от ньюс апи
  const changeDateformat = (item) => {
    const dateArticle = new Date(item);
    const correctDate = `${dateArticle.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${dateArticle.getFullYear()}`;
    return correctDate;
  }

  function clickOnArticleButton(evt) {
    if (evt.target.classList.contains('results__bookmark-marked') && props.loggedIn) {
      return props.onDelete(props.id)
    }
    if (evt.target.classList.contains('results__bookmark') && props.loggedIn) {
        props.addArticleClick({
          title: props.title,
          text: props.text,
          date: props.date,
          source: props.source,
          link: props.url,   
          image: props.image,
          keyword: props.keyword
      })
    } 
  }

  return (
    <li className="newscard__conteiner" >
      <div className={`${props.loggedIn && props.id && props.savedNews ? 'newscard__keyword' : 'newscard__keyword_hidden'}`}>{props.keyword}</div>
      {props.id && props.savedNews ?
        <button type="reset" className="newscard__trash" onClick={props.onCardDelete}></button>
        : props.loggedIn ?
          <button type="button" className={`results__bookmark ${props.id ? 'results__bookmark-marked' : ''}`}
            onClick={clickOnArticleButton}></button>
          :
          <button className="results__bookmark results__bookmark_not-loggedin" onClick={props.onClick}></button>
      }
      <a target='_blank'
        rel='noreferrer'
        href={props.url || props.link}
      > <img className="newscard__img" src={props.image || props.urlToImage} alt="иллюстрация к новости" /></a>
      <figcaption className="newscard__figcaption">
        <p className="newscard__date">{changeDateformat(props.date)}</p>
        <a target='_blank'
        rel='noreferrer'
        href={props.url || props.link}
        className="newscard__link"><h3 className="newscard__title">{props.title}</h3>
        <p className="newscard__text">{props.text}</p></a>
        <a className="newscard__link"
        target='_blank'
        rel='noreferrer'
        href={props.url || props.link}
        ><p className="newscard__source">{props.source}</p></a>
      </figcaption>
    </li>
  )

}
export default NewsCard