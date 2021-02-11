const url = 'http://api.nolmmnews.students.nomoreparties.space';

class MainApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }


    register(data) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email,
                name: data.name
            })
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`));
    }

    login(data) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`));
    }

    getToken() {
        const jwt = localStorage.getItem('jwt');
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                ...this.headers,
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`));
    }

    

    getArticles() {
        const jwt = localStorage.getItem('jwt');
        return fetch(`${this.baseUrl}/articles`, {
            method: 'GET',
            headers: {
                ...this.headers,
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`));
    }

    createArticle(data) {
        const jwt = localStorage.getItem('jwt');
        return fetch(`${this.baseUrl}/articles`, {
            method: 'POST',
            headers: {
                ...this.headers,
                "Authorization": `Bearer ${jwt}`
            },
            body: JSON.stringify({
                keyword: data.keyword,
                title: data.title,
                text: data.text,
                date: data.date,
                source: data.source,
                link: data.link,
                image: data.image
            })
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`));
    }

    deleteArticle(id) {
        const jwt = localStorage.getItem('jwt');
        return fetch(`${this.baseUrl}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                ...this._headers,
                authorization: `Bearer ${jwt}`,
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
    }
}



const mainApi = new MainApi({
    baseUrl: url,
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
    }
})

export default mainApi;