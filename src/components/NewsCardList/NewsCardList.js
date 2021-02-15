import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
// временное решение для отрисовки карточек согласно макету
// import image1 from '../../images/image1.jpg';
// import image2 from '../../images/image2.jpg';
// import image3 from '../../images/image3.png'

//временное решение для отрисовки карточек согласно макету
// const cards = [
//   { keyword: "Природа", image: image1, date: "2 августа, 2019", title: "Национальное достояние – парки", text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.", source: "Дзен"},
//   { keyword: "Природа", image: image2, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Афиша"},
//   { keyword: "Тайга", image: image3, date: "2 августа, 2019", title: "«Первозданная тайга»: новый фотопроект Игоря Шпиленка", text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...", source: "Медиазона"},
//   { keyword: "Парки", image: image1, date: "2 августа, 2019", title: "Национальное достояние – парки", text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.", source: "Дзен"},
//   { keyword: "Фотография", image: image2, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Афиша"},
// ]


function NewsCardList (props) {
  // const news = props.data

  const [ index, setIndex ] = React.useState(6);
  const [ articles, setArticles ] = React.useState(props.data.slice(0, 3));
  // const [saved, setSaved] = React.useState([]);
  

  
  const showMore = () => {
    setIndex(array => array += 3);
    setArticles(props.data.slice(0, index));
  }

  

  React.useEffect(() => {
    // const saved = localStorage.getItem('saved');
    // if (saved) {
    //   setSaved(JSON.parse(saved));
    // }
    setArticles(props.data.slice(0, 3));
  }, [props.data])
  
  return (
    <div>
<ul className="newscard__list">
  {articles.map(item => <NewsCard 
    createArticle={props.createArticle}
    keyword={item.keyword} 
    image={item.urlToImage} 
    date={item.publishedAt} 
    title={item.title} 
    text={item.description} 
    source={item.source.name}
    // key={item.url}
    loggedIn={props.loggedIn}
    url={item.url}
    // deleteArticle={props.deleteArticle}
    key={item.id + 1} 
    id={item.id}
   
    />)}
 </ul>
<div className="results__button_conteiner">
{props.data.length !== articles.length ? <button className="results__button" onClick={showMore}>Показать еще</button> : ''}
      </div>
     </div>
  )

}

export default NewsCardList;