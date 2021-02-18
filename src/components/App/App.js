import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header.js';
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
  //переменная состояния для хедера -  меняет цвет
  const [headerTheme, setheaderTheme] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setcurrentUser] = React.useState({ name: '', email: '' })
  //показывает прелоадер
  const [search, setSearch] = React.useState(false);
  //данные от ньюс апи
  const [data, setData] = React.useState(null);
  //для серверных ошибок
  const [authError, setAuthError] = React.useState({
    register: '',
    login: '',
  });
  //открытие попапа регистрации
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = React.useState(false);
  //открытие попапа входа при нажатии на кнопку войти в попапе регистрации
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  //открытие попапа с сообщением об успешной регистрации
  const [isInfoTooltipopen, setIsInfoTooltipopen] = React.useState(false);
  //открытие и закрытие мобильного меню
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [id, setId] = React.useState('');
  // стэйт для сохранённых новостей
  const [savedArticles, setSavedArticles] = React.useState([]);
  const history = useHistory();
  

  //запрос к апи для получения новостей
  const requestArticles = (keyword) => {
    setSearch(true)
    newsApi.getArticles(keyword)
      .then(res => {
        const arrayWithKeywords = res.articles.map(item => {
          item.keyword = keyword
          return item
        });
        setData(arrayWithKeywords)
        localStorage.setItem('Search', JSON.stringify(arrayWithKeywords))
        // localStorage.getItem('Saved')
      })
      .catch(err => console.log(err))
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
          const news = (JSON.parse(localStorage.getItem(('Search'))))
          setData(news)
          
        })

        .catch(err => console.log(err));
    }
  }, [loggedIn])

  function handlePopupRegisterClick() {
    setIsPopupRegisterOpen(true)
  }

  function handlePopupLoginClick() {
    setIsPopupLoginOpen(true);
  }

  function handlemobileOpenClick() {
    setMobileOpen(!mobileOpen);
  }

  //закрытие попапов
  function closeAllPopups() {
    setIsPopupRegisterOpen(false);
    setIsPopupLoginOpen(false);
    setIsInfoTooltipopen(false);
    setMobileOpen(false);
    setAuthError({
      register: '',
      login: '',
    });
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

  //регистрация
  function handleRegister(data) {
    setAuthError({
      register: '',
      login: '',
    });
    mainApi.register({
      password: data.password,
      email: data.email,
      name: data.name
    })
      .then(() => {
        closeAllPopups();
        setIsInfoTooltipopen(true);
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
        setAuthError({
          ...authError, register: err.message,
        });

      });
  }

  //вход
  function handleLogin(data) {
    setAuthError({
      register: '',
      login: '',
    });
    mainApi.login({
      password: data.password,
      email: data.email
    })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        closeAllPopups();
        setLoggedIn(true);
      })
      .catch((err) => {
        setAuthError({
          ...authError, login: err.message,
        });
      });
  }

  //выход
  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('Search')
    setLoggedIn(false);
    history.push('/');
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('token')
    Promise.all([mainApi.getUserMe(jwt), mainApi.getArticles(jwt)])
      .then(([userData, saveCardData]) => {
        setcurrentUser(userData)
        setSavedArticles(saveCardData)
      })
      .catch(err => console.log(err))
  }, [loggedIn])

  //сохранение статьи
  function createArticle(data) {
    const newArticles = savedArticles;
    mainApi.createArticle(data)
      .then((res) => {
        newArticles.push(res);
        setSavedArticles(newArticles);
        // localStorage.setItem('Saved', JSON.stringify(setData))
        setId(res._id);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  //удаление из сохраненных
  const deleteArticleRequest = (id) => {
    return mainApi.deleteArticle(id)
      .then((res) => {
        const result = savedArticles.filter(item => item._id !== id);
        setSavedArticles(result);
        // localStorage.removeItem('Saved')
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header isOpenMob={mobileOpen}
          theme={headerTheme}
          loggedIn={loggedIn}
          onClick={handlePopupLoginClick}
          open={handlemobileOpenClick}
          handleLogout={handleLogout}
        />
        <Switch>
          <Route exact path='/'>
            <Main search={search}
              requestArticles={requestArticles}
              data={data}
              setData={setData}
              setSearch={setSearch}
              theme={setheaderTheme}
              articles={savedArticles}
              createArticle={createArticle}
              deleteArticle={deleteArticleRequest}
              loggedIn={loggedIn}
              saved={savedArticles}
              id={id}
              onClick={handlePopupLoginClick}
              // handleSetmarkedClick={handleSetmarkedClick}
              // isMarked={isMarked}

            />
          </Route>
          <ProtectedRoute exact
            path='/saved-news'
            component={SavedNews}
            loggedIn={loggedIn}
            theme={setheaderTheme}
            data={data}
            articles={savedArticles}
            saved={savedArticles}
            setSaved={setSavedArticles}
            id={id}
            setId={setId}
            deleteArticle={deleteArticleRequest}
            // handleSetmarkedClick={handleSetmarkedClick}
          />

        </Switch>
        <PopupRegister
          isOpen={isPopupRegisterOpen}
          onClose={closeAllPopups}
          onClick={handlePopupLoginClick}
          handleRegister={handleRegister}
          onLogin={handlePopupLoginClick}
          error={authError}
        />
        <PopupLogin
          isOpen={isPopupLoginOpen}
          onClose={closeAllPopups}
          handleLogin={handleLogin}
          onRegister={handlePopupRegisterClick}
          error={authError}
        />
        <InfoTooltip
          onLogin={handlePopupLoginClick}
          isOpen={isInfoTooltipopen}
          onClose={closeAllPopups}
          onClick={isPopupLoginOpen}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
