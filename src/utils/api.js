class Api {
    constructor({ baseUrl, headers }) {
      this.url = baseUrl;
      this.headers = headers;
    }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.headers.authorization
      }
    })
      .then(res => this._getResponse(res))
  }

  postNewCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => this._getResponse(res))
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.headers.authorization
      }
    })
      .then(res => this._getResponse(res))
  }

  putLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this.headers.authorization
      }
    })
      .then(res => this._getResponse(res))
  }

  deleteLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.headers.authorization
      }
    })
      .then(res => this._getResponse(res))
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.headers.authorization
      }
    })
      .then(res => this._getResponse(res))
  }

  patchUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => this._getResponse(res))
  }

  patchAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(res => this._getResponse(res))
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: '6af0716c-c3e9-4822-a150-9ccc6645330e',
    'Content-Type': 'application/json'
  }
});

export default api;