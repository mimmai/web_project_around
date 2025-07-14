

export default class Api {
  constructor(baseURL, headers){
    this.baseURL = baseURL;
    this.headers = headers;
  }

  getUserInfo() {
    return fetch(`${this.baseURL}/users/me`, {
      headers: this.headers,
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  getInicialCards() {
    return fetch(`${this.baseURL}/cards`, {
      headers: this.headers,
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  editUser(data) {
    return fetch(`${this.baseURL}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  createCard(data) {
      return fetch(`${this.baseURL}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  deleteCard(cardID) {
      return fetch(`${this.baseURL}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  likeCard(cardID) {
      return fetch(`${this.baseURL}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  dislikeCard(cardID) {
      return fetch(`${this.baseURL}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  profileImage(image) {
      return fetch(`${this.baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(image)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }


  }

