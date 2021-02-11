import './NewsCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard(props) {
  const [isMarked, setIsMarked] = React.useState(false);
  // функция для отметки карты сохраненной
  function handleSetmarkedClick() {
    setIsMarked(!isMarked);
  }

   // меняет формат даты, приходящей от ньюс апи
    const changeDateformat = (item) => {
    const dateArticle = new Date(item);
    const correctDate = `${dateArticle.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${dateArticle.getFullYear()}`;
    return correctDate;
  }

  return (
    <li className="newscard__conteiner">
        <div className={`${props.loggedIn ? 'newscard__keyword' : 'newscard__keyword_hidden'}`}>{props.keyword}</div>
        {props.loggedIn ? <button type="reset" className="newscard__trash"></button> :
          <button type="button" className={`results__bookmark ${isMarked ? 'results__bookmark-marked' : ''}`} onClick={handleSetmarkedClick}></button>}
        <Link target='_blank'
        rel='noreferrer'
        href={props.url} 
        > <img className="newscard__img" src={props.image} alt="иллюстрация к новости" /></Link>
        <figcaption className="newscard__figcaption">
          <p className="newscard__date">{changeDateformat(props.date)}</p>
          <Link className="newscard__link"><h3 className="newscard__title">{props.title}</h3></Link>
          <p className="newscard__text">{props.text}</p>
          <Link className="newscard__link"><p className="newscard__source">{props.source}</p></Link>
        </figcaption>
    </li>
  )

}
export default NewsCard;