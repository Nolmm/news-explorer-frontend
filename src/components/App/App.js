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
  const [headerTheme, setheaderTheme] = React.useState(false);

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
  // const [data, setData] = React.useState(JSON.parse(localStorage.getItem('news')) || null);;
  
  
  const [authError, setAuthError] = React.useState({
    register: '',
    login: '',
  });

  
  //запрос к апи
  const requestArticles = (keyword) => {
    setSearch(true)
    newsApi.getArticles(keyword)
      .then(res => {
        const arrayWithKeywords =res.articles.map(item => {
            item.keyword = keyword
            //когда будет время внести сюда остальные параметры из ответа и сделать как для записи в базу

            return item
          });
        setData( arrayWithKeywords)
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
    setAuthError({
      register: '',
      login: '',
    });
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
    // .catch((err) => 
    //     console.log(err)
    // )
    .catch((err) => {
      setAuthError({
        ...authError, register: err.message,
       
      });
    });
}

// function handleRegister(data) {
//   mainApi.register(data)

//     .then(() => {
//       closeAllPopups();
//       setIsInfoTooltipopen(true);
//     })
//     console.log(data)
//     // .catch((err) => {
//     //   setIsPopupLoading(false);
//     //   setAuthError({
//     //     ...authError, register: err.message,
//     //   });
//     // });
//     .catch((err) => 
//             console.log(err))
// }

function handleLogin (data) {
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
      // history.push('/saved-news')
  })
  .catch((err) => {
    setAuthError({
      ...authError, register: err.message,
     
    });
  });
}
function handleLogout () {
  localStorage.removeItem('jwt');
  setLoggedIn(false);
  history.push('/');
}

//сохранение статьи
// const [articles, setArticles] = React.useState([]);



// function createArticle(data) {
//   mainApi.createArticle({
//     keyword: data.keyword,
//     title: data.title,
//     text: data.text,
//     date: data.date,
//     source: data.source,
//     link: data.link,
//     image: data.image})
//   .then((newCard) => {
//     setArticles([newCard, ...articles]);
//     console.log(newCard)
//   })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const createArticle = (data) => {
//   return mainApi.createArticle({
//     keyword: data.keyword,
//     title: data.title,
//     text: data.text,
//     date: data.date,
//     source: data.source,
//     link: data.link,
//     image: data.image})
//   }


//переименовать
const [id, setId] = React.useState('');
  function createArticle(data) {
    const newArticles = savedArticles;
    mainApi.createArticle(data)
      .then((res) => {
        newArticles.push(res);
        setSavedArticles(newArticles);
        setId(res._id);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // function deleteArticle(id){
  //    mainApi.deleteArticle(id);filter(item => item !== props.id);
  // }
  // function deleteArticle(id) {
  //   mainApi.deleteArticle(id)
  //   .then(() => {
  //     const newArticles = savedArticles.filter(item => item !== id);;
  //     setSavedArticles(newArticles);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  const deleteArticleRequest = (id) => {
    return mainApi.deleteArticle(id);
  }
// стэйт для сохранённых новостей
const [ savedArticles, setSavedArticles ] = React.useState([]);
// React.useState([]);
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
            // keyword={keyword}
            // setArticles={setArticles}
            deleteArticle={deleteArticleRequest}
            loggedIn={loggedIn} 
            saved={savedArticles}
            id={id}
          />
        </Route>
        <ProtectedRoute exact
          path='/saved-news'
          component={SavedNews}
          loggedIn={loggedIn}
          theme={setheaderTheme}
          //переименовать
          data={data}
            // setData={setData}
          articles={savedArticles}
          saved={savedArticles}
          setSaved={setSavedArticles}
          id={id}
          deleteArticle={deleteArticleRequest}
          />
          
      </Switch>
      <PopupRegister
        // onPopupRegister={handlePopupRegisterClick} 
        isOpen={isPopupRegisterOpen}
        onClose={closeAllPopups} onClick={handlePopupLoginClick} handleRegister={handleRegister} onLogin={handlePopupLoginClick} 
        error={authError}
        />
      <PopupLogin isOpen={isPopupLoginOpen}
        onClose={closeAllPopups} handleLogin={handleLogin} onRegister={handlePopupRegisterClick}
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
