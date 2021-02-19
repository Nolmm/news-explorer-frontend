import './NewsCard.css';
import React from 'react';

function NewsCard(props) {
  const [isMarked, setIsMarked] = React.useState(false);

  // меняет формат даты, приходящей от ньюс апи
  const changeDateformat = (item) => {
    const dateArticle = new Date(item);
    const correctDate = `${dateArticle.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${dateArticle.getFullYear()}`;
    return correctDate;
  }

 
  // function clickOnArticleButton(evt) {
  //   if (evt.target.classList.contains('results__bookmark') && props.loggedIn) {
  //       setIsMarked(true)
  //       props.addArticleClick(props.id)
  //   } 
  //   if (evt.target.classList.contains('results__bookmark-marked') && props.loggedIn) {
  //     setIsMarked(false)
  //     props.onDelete(props.id)
  //   }
  // }
  

  // React.useEffect(() => {
  //   const savedArticle = JSON.parse(localStorage.getItem('saved'));
  //   if (!savedArticle) return;
  //   if (savedArticle.find(item => item === props.id)) {
  //     setCardMarked();
  //   }
  // }, [])

  function clickOnArticleButton(evt) {
    if (evt.target.classList.contains('results__bookmark-marked') && props.loggedIn) {
      setIsMarked(false)
      return props.onDelete(props.id)
    }
    if (evt.target.classList.contains('results__bookmark') && props.loggedIn) {
        setIsMarked(true)
        props.addArticleClick(props.id)
    } 
  }

  

  React.useEffect(() => {
    // if (!props.id) return
    if (!props.id) {
      setIsMarked(true)
    }
  },
    
  []);
  
  return (
    <li className="newscard__conteiner" >
      <div className={`${props.loggedIn && props.saved ? 'newscard__keyword' : 'newscard__keyword_hidden'}`}>{props.keyword}</div>
      {props.saved ?
        <button type="reset" className="newscard__trash" onClick={props.onCardDelete}></button>
        : props.loggedIn ?
          <button type="button" className={`results__bookmark ${isMarked ? 'results__bookmark-marked' : ''}`}
            onClick={clickOnArticleButton}></button>
          :
          <button className="results__bookmark results__bookmark_not-loggedin" onClick={props.onClick}></button>
      }
      <a target='_blank'
        rel='noreferrer'
        href={props.url || props.link}
      > <img className="newscard__img" src={props.image} alt="иллюстрация к новости" /></a>
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
export default NewsCard;