const url = 'https://nomoreparties.co/news/v2/everything';
const apiKey = 'c5bc199947a34a7096759ba544e69356';


class NewsApi {
  constructor({baseUrl, apiKey }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  getArticles(keyword) {
    const date = new Date();
    const dateStart = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const sevenDays = date.getDate() - 7;
    date.setDate(sevenDays);
    const dateEnd = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    return fetch(`${this.baseUrl}?language=ru&q=${keyword}&from=${dateEnd}&to=${dateStart}&pageSize=100&apiKey=${this.apiKey}`, {
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


