const url = 'https://nomoreparties.co/news/v2/everything';
const apiKey = 'c5bc199947a34a7096759ba544e69356';


class NewsApi {
  constructor({baseUrl, apiKey }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  getArticles(keyword) {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const dateStart = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const dateEnd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    return fetch(`${this.baseUrl}?language=ru&q=${keyword}&from=${dateStart}&to=${dateEnd}&pageSize=100&apiKey=${this.apiKey}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      });
  }
}

const newsApi = new NewsApi({
  baseUrl: url,
  apiKey
})
export default newsApi;



// key: c5bc199947a34a7096759ba544e69356

// https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[ваш_ключ] 