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

  function savedArticles() {
    props.createArticle({
      keyword: props.keyword,
      title: props.title,
      text: props.text,
      date: props.date,
      source: props.source,
      link: props.url,
      image: props.image
    })
    handleSetmarkedClick()
  }

  React.useEffect(() => {
    const savedArticle = JSON.parse(localStorage.getItem('saved'));
    if (!savedArticle) return;
    if (savedArticle.find(item => item === props.id)) {
      handleSetmarkedClick();
    }
  }, [])
  


const deleteArticle = () => {
 
  props.deleteArticle(props.id)
    .then((res) => {
      console.log(res);
      props.data((array) => {
        const result = array.filter(item => item !== props.id);
        localStorage.removeItem('saved');
        localStorage.setItem('saved', JSON.stringify(result));
        return result;
      })
      handleSetmarkedClick();
    })
    .catch(err => console.log(err))
}
  
  return (
    <li className="newscard__conteiner" id={props.id}>
<div className={`${props.loggedIn && props.saved ? 'newscard__keyword' : 'newscard__keyword_hidden'}`}>{props.keyword}</div>
          {props.saved ? 
           <button type="reset" className="newscard__trash" onClick={() => props.deleteArticle(props.id)}></button> 
           : props.loggedIn ? 
           <button type="button" className={`results__bookmark ${isMarked ? 'results__bookmark-marked' : ''}`} 
           onClick={isMarked ? deleteArticle :  savedArticles}></button> : 
           <button className="results__bookmark results__bookmark_not-loggedin"></button>
          }
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