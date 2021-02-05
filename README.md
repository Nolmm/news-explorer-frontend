# Пояснения для удобства проверки

Код снабжен комментариями, позволяющими посмотреть разные части верстки. Чтобы проверять было легче, далее значения состояния стейтов в компоненте App.js и описание что будет отражено.

## Роут /

### Main_Not_Logged_In (названия из макета, также для удобства проверки)
**Значения переменных**: 
const [headerTheme, setheaderTheme] = React.useState(false); 
const [loggedIn, setLoggedIn] = React.useState(false); 
const [search, setSearch] = React.useState(true); 
const [notfound, setNotfound] = React.useState(false); 

### Main_Results_Logged_In
**Значения переменных**: 
const [headerTheme, setheaderTheme] = React.useState(false); 
const [loggedIn, setLoggedIn] = React.useState(true); 
const [search, setSearch] = React.useState(true); 
const [notfound, setNotfound] = React.useState(false); 

### Main_Results_Loading
**Значения переменных**: 
const [headerTheme, setheaderTheme] = React.useState(false); 
const [loggedIn, setLoggedIn] = React.useState(false); 
const [search, setSearch] = React.useState(false); 
const [notfound, setNotfound] = React.useState(true); 

### Main_Results_No_Results 
**Значения переменных**: 
const [headerTheme, setheaderTheme] = React.useState(false); 
const [loggedIn, setLoggedIn] = React.useState(false); 
const [search, setSearch] = React.useState(false); 
const [notfound, setNotfound] = React.useState(false); 

## Роут /saved-news

## Saved_News_Logged_In 
**Значения переменных**: 
const [headerTheme, setheaderTheme] = React.useState(true); 
const [loggedIn, setLoggedIn] = React.useState(true); 
const [search, setSearch] = React.useState(true); 
const [notfound, setNotfound] = React.useState(true); 
