import './NewsCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard(props) {
  const [isMarked, setIsMarked] = React.useState(false);
  // функция для отметки карты сохраненной
  function handleSetmarkedClick() {
    setIsMarked(!isMarked);
  }


  return (
    <li className="newscard__conteiner">
      <figure className="newscard__figure">
        <div className={`${props.loggedIn ? 'newscard__keyword' : 'newscard__keyword_hidden'}`}>{props.keyword}</div>
        {props.loggedIn ? <button type="reset" className="newscard__trash"></button> :
          <button type="button" className={`results__bookmark ${isMarked ? 'results__bookmark-marked' : ''}`} onClick={handleSetmarkedClick}></button>}
        <Link> <img className="newscard__img" src={props.image} alt="иллюстрация к новости" /></Link>
        <figcaption className="newscard__figcaption">
          <p className="newscard__date">{props.date}</p>
          <Link className="newscard__link"><h3 className="newscard__title">{props.title}</h3></Link>
          <p className="newscard__text">{props.text}</p>
          <Link className="newscard__link"><p className="newscard__source">{props.source}</p></Link>
        </figcaption>
      </figure>
    </li>
  )

}
export default NewsCard;