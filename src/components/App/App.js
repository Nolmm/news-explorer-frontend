import React from 'react';
// import { useState } from 'react';
import './App.css';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'
import SavedNews from '../SavedNews/SavedNews.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import PopupRegister from '../PopupRegister/PopupRegister.js';
import PopupLogin from '../PopupLogin/PopupLogin.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import newsApi from '../../utils/NewsApi.js';
import mainApi from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';





function App() {

  //переменная состояния для хедера закомментировать для просмотра хедера по роуту /saved-news
  const [headerTheme, setheaderTheme] = React.useState(true);

  // закомментировать для корректной отрисовки карточек по роуту /saved-news
  const [loggedIn, setLoggedIn] = React.useState(false);
  // const [email, setEmail] = React.useState('');
  const history = useHistory();
  // const [tooltip, setTooltip] = React.useState({
  //   isOpen: false
  // });
  const [currentUser, setcurrentUser] = React.useState({ name: '', email: '' })
  //в таком виде отображает карточки, закомментировать чтобы посмотреть прелоадер или нот фаунд
  const [search, setSearch] = React.useState(false);


  const [data, setData] = React.useState(null);

  //запрос к апи
  const requestArticles = (keyword) => {
    setSearch(true)
    newsApi.getArticles(keyword)
      .then(res => {
        setData(res.articles)
      })
      .finally(_ => {
        setSearch(false)
      })
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
  if (jwt) {
    mainApi.getToken()
      .then((res) => {
        setcurrentUser({
            ...currentUser,
            name: res.name,
            email: res.email,
          });
        })
        
      //   res.data ? setLoggedIn(true) : setLoggedIn(false);
      //   setEmail(res.data.email);
      //   history.push('/');
      // })
      .catch(err => console.log(err));
  }
}, [loggedIn])


  
  
  

  //открытие попапа регистрации
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = React.useState(false);
  function handlePopupRegisterClick() {
    setIsPopupRegisterOpen(true)
  }
  //открытие попапа входа при нажатии на кнопку войти в попапе регистрации
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  function handlePopupLoginClick() {
    setIsPopupLoginOpen(true);
  }

  //открытие попапа с сообщением об успешной регистрации
  //ВРЕМЕННОЕ РЕШЕНИЕ - открытие при нажатии на кнопку регистрация в попапе логин
  //далее будет открываться только в случае ответа от сервера об успешной регистрации
  const [isInfoTooltipopen, setIsInfoTooltipopen] = React.useState(false);
  // function handleInfoTooltiClick() {
  //   setIsInfoTooltipopen(true);
  // }
  //открытие и закрытие мобильного меню
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handlemobileOpenClick() {
    setMobileOpen(!mobileOpen);
  }




  //закрытие попапов
  function closeAllPopups() {
    setIsPopupRegisterOpen(false);
    setIsPopupLoginOpen(false);
    setIsInfoTooltipopen(false);
    setMobileOpen(false);
    // setTooltip({
    //   ...tooltip,
    //   isOpen: false
    // });
  }

  //закрытие по Escape и фону
  React.useEffect(() => {
    function closingByEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function closingByBackground(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }
    window.addEventListener('keydown', closingByEsc);
    window.addEventListener('click', closingByBackground);

    return () => {
      window.removeEventListener('keydown', closingByEsc);
      window.removeEventListener('click', closingByBackground);
    };
  }, []);

  function handleRegister (data) {
    mainApi.register({
      password: data.password,
      email: data.email,
      name: data.name
    })
    .then((res) => {
        console.log(res);
        setIsInfoTooltipopen(true);
        history.push('/');
    })
    .catch((err) => 
        console.log(err)
    )
}

function handleLogin (data) {
  mainApi.login({
      password: data.password,
      email: data.email
  })
  .then((res) => {
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true);
      history.push('/saved-news')
  })
  .catch((err) => console.log(err))
}
function handleLogout () {
  localStorage.removeItem('jwt');
  setLoggedIn(false);
  history.push('/');
}



  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header isOpenMob={mobileOpen} theme={headerTheme} loggedIn={loggedIn} onClick={handlePopupRegisterClick}
        open={handlemobileOpenClick}
      />
      <Switch>
        <Route exact path='/'>
          <Main search={search}
            requestArticles={requestArticles}
            data={data}
            setData={setData}
            setSearch={setSearch}
          />
        </Route>
        <ProtectedRoute
          path='/saved-news'
          component={SavedNews}
          loggedIn={loggedIn}
          />
          
      </Switch>
      <PopupRegister
        // onPopupRegister={handlePopupRegisterClick} 
        isOpen={isPopupRegisterOpen}
        onClose={closeAllPopups} onClick={handlePopupLoginClick} onSubmit={handleRegister} />
      <PopupLogin isOpen={isPopupLoginOpen}
        onClose={closeAllPopups} onSubmit={handleLogin} 
        // onInfoTooltip={handleInfoTooltiClick} 
        />
      <InfoTooltip 
      // isOpen={tooltip}
      isOpen={isInfoTooltipopen}
        onClose={closeAllPopups} />
      <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
