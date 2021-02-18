import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js'
import Results from '../Results/Results.js'
import About from '../About/About.js'
import Preloader from '../Preloader/Preloader.js'
import NotFound from '../NotFound/NotFound.js'

//функция отрисовывает страницу в зависимости от запроса
const renderContent = (data, search, createArticle, deleteArticle, loggedIn, id, onClick, handleSetmarkedClick, isMarked) => {
  if (search) return <Preloader />
  if (data === null) return
  if (data.length === 0) return <NotFound />
  return <Results data={data} createArticle={createArticle} deleteArticle={deleteArticle} loggedIn={loggedIn} id={id} onClick={onClick} handleSetmarkedClick={handleSetmarkedClick} isMarked={isMarked}/>
}

function Main(props) {
  //меняет цвет хедера
  React.useEffect(() => {
    props.theme(false);
  }, []);
  return (
    <section className="main">
      <SearchForm requestArticles={props.requestArticles}/>
      {renderContent(props.data, props.search, props.createArticle, props.deleteArticle, props.loggedIn, props.id, props.onClick, props.handleSetmarkedClick, props.isMarked)}
      <About />
    </section>
  )

}

export default Main;