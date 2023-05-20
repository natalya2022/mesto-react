export default class Api {
  constructor(apiParams) {    
    this._baseUrl = apiParams.baseUrl;
    this._headers = apiParams.headers;    
  }

  
  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  
  // _request(endpoint, options) {
  //   return fetch(endpoint, options).then(this._checkRequest)
  // }


  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
      .then(res => this._checkRequest(res));
  }


  addNewCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then(res => this._checkRequest(res));
  }


  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkRequest(res));
  }
  

  // getUserInfo() {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     headers: this._headers
  //   })
  //   .then(res => this._checkRequest(res));    
  // }

  getUserInfo() {
    return this._request(`/users/me1`, {
      headers: this._headers
    })    
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}${endpoint}`, options).then(res => this._checkRequest(res));
  }

  // `${this._baseUrl}/users/me`

  // {
  //   headers: this._headers
  // }


  editUserProfile({name, about}) {    
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
        })
      })
      .then(res => this._checkRequest(res)); 
    }


  editUserAvatar({avatar}) {    
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({        
        avatar: avatar
        })
      })
      .then(res => this._checkRequest(res)); 
    }
   

  likeCard (cardId, like) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: like ? 'DELETE' : 'PUT',
      headers: this._headers      
      })
    .then(res => this._checkRequest(res)); 
  }
}   

const apiParams = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
      authorization: 'a2c97fd6-33e2-4a7f-88de-1986c85df645',
      'Content-Type': 'application/json'
  }
}

export const api = new Api(apiParams);

