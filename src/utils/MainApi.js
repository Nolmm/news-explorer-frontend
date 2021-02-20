// const baseUrl = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`

class MainApi {
    constructor({ baseUrl, headers }) {
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
            .then((res) => {
                if (!res.ok) {
                    return res.text()
                        .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
                }
                return res.json();
            });

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
            .then((res) => {
                if (!res.ok) {
                    return res.text()
                        .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
                }
                return res.json();
            });
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

    getUserMe() {
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
    baseUrl: 'http://api.nolmmnews.students.nomoreparties.space',
    headers: {
        "Content-Type": "application/json",
    }
})

export default mainApi;

// `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`