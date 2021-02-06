import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'
import SavedNews from '../SavedNews/SavedNews.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js'
import PopupRegister from '../PopupRegister/PopupRegister.js'
import PopupLogin from '../PopupLogin/PopupLogin.js'
import InfoTooltip from '../InfoTooltip/InfoTooltip.js'

function App() {

  //переменная состояния для хедера закомментировать для просмотра хедера по роуту /saved-news
  const [headerTheme, setheaderTheme] = React.useState(false);
// //раскомментировать для просмотра хедера по роуту /saved-news
//   const [headerTheme, setheaderTheme] = React.useState(true);
  // закомментировать для корректной отрисовки карточек по роуту /saved-news
  const [loggedIn, setLoggedIn] = React.useState(false);
  // //расскомментировать для корректной отрисовки карточек по роуту /saved-news ВРЕМЕННОЕ РЕШЕНИЕ! после функционала пропсы будут работать по-другому
  // const [loggedIn, setLoggedIn] = React.useState(true);

  // //расскомментировать для отображения прелоудера поиска
  // const [search, setSearch] = React.useState(false);
  // const [notfound, setNotfound] = React.useState(true);

  // //расскомментировать для отображения ничего не найдено
  // const [search, setSearch] = React.useState(false);
  // const [notfound, setNotfound] = React.useState(false);
  
  //в таком виде отображает карточки, закомментировать чтобы посмотреть прелоадер или нот фаунд
  const [search, setSearch] = React.useState(true);
  const [notfound, setNotfound] = React.useState(true);


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
function handleInfoTooltiClick() {
  setIsInfoTooltipopen(true);
}
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
  
  


  return (
    <div className="page">
      <Header isOpenMob={mobileOpen} theme={headerTheme} loggedIn={loggedIn} onClick={handlePopupRegisterClick}
      open={handlemobileOpenClick} 
      />
      <Switch>
      <Route exact path='/'>
          <Main search={search} notfound={notfound}/> 
      
      </Route>
      <Route path='/saved-news'>
      <SavedNewsHeader />
      <SavedNews loggedIn={loggedIn}/>
      </Route>
</Switch>
<PopupRegister 
// onPopupRegister={handlePopupRegisterClick} 
isOpen={isPopupRegisterOpen} 
onClose={closeAllPopups} onClick={handlePopupLoginClick} />
<PopupLogin isOpen={isPopupLoginOpen} 
onClose={closeAllPopups} onInfoTooltip={handleInfoTooltiClick}/>
<InfoTooltip isOpen={isInfoTooltipopen} 
onClose={closeAllPopups}/>
      <Footer />
    </div>
  );
}

export default App;
