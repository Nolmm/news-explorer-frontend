import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js'
import Results from '../Results/Results.js'
import About from '../About/About.js'
import Preloader from '../Preloader/Preloader.js'
import NotFound from '../NotFound/NotFound.js'



function Main(props) {
  return (
<section className="main">
  <SearchForm />
  {props.search ? <Results /> : props.notfound ? <Preloader /> : <NotFound />}
  <About />
</section>
  )
  
}

export default Main;