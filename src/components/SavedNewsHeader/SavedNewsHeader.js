import './SavedNewsHeader.css';
import {CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import React from 'react';

function SavedNewsHeader (props) {
  const { name } = React.useContext(CurrentUserContext);
  const [ keywords, setKeywords ] = React.useState([]);

  React.useEffect(() => {
    setKeywords(selectByQuantity(props.articles.map(el => el.keyword[0].toUpperCase() + el.keyword.slice(1))));
  }, [props.articles])

  const selectByQuantity = (arr) => {
    const quantity = {};
    arr.forEach((item) => quantity[item] = 0);
    const uniquesKeyword = arr.filter((item) => ++quantity[item] === 1);
    return uniquesKeyword.sort((a, b) => quantity[b] - quantity[a]);
  }

  function sortNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }
  const savedText = sortNum(props.articles.length, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);
  return (
    <section className="savednewsheader">
      <h2 className="savednewsheader__title">Сохранённые статьи</h2>
      <p className="savednewsheader__subtitle">{`${name}, у вас ${props.articles.length} ${savedText}`}</p>
      <p className="savednewsheader__keywords">По ключевым словам: 
      <span className="savednewsheader__keyword">
        {keywords.length > 3 ? `${keywords[0]}, ${keywords[1]} и ${keywords.length - 2}-м другим` : `${keywords.join(', ')}`}</span></p>
    </section>
  )
}

export default SavedNewsHeader;
