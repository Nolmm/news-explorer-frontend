import './Results.css';
import React from 'react';
// import NewsCard from '../NewsCard/NewsCard.js'

import NewsCardList from '../NewsCardList/NewsCardList.js'

// временное решение для отрисовки карточек согласно макету
// import image4 from '../../images/image4.jpg'
// import image5 from '../../images/image5.jpg'
// import image6 from '../../images/image6.jpg'

//временное решение для отрисовки карточек согласно макету
// const cards = [
//   { image: image4, date: "2 августа, 2019", title: "Национальное достояние – парки", text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.", source: "Лента.ру" },
//   { image: image5, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Медуза" },
//   { image: image6, date: "2 августа, 2019", title: "«Первозданная тайга»: новый фотопроект Игоря Шпиленка", text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...", source: "Риа" },
// ]
/* компонент позволяет реализовать верстку в соответствии с макетом - на странице 
// незарег пользователя у новостей другие картини
// РЕШЕНИЕ ВРЕМЕННОЕ! при реализации функционала будет использован компонет NewsCardList */

function Results(props) {
  

  return (
    
    <section className="results">
      <h2 className="results__title">Результаты поиска</h2>
      <NewsCardList data={props.data} />
      {/* <div className="results__button_conteiner">
      <button className="results__button">Показать еще</button>
      </div> */}
    </section>
  )
}

export default Results
