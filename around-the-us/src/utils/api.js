import React, {Component} from "react";

class Api extends Component {
    constructor(props) {
        super(props)
        this._baseUrl = props.baseUrl;
        this._headers = props.headers;
    }

    _checkResponce(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._headers
        }).then(this._checkResponce);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers
        })
            .then(this._checkResponce);
    }

    createCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(data),
        }).then(this._checkResponce);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: "DELETE",
        }).then(this._checkResponce);
    }

    changeLikeCardStatus(cardId, isLiked) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            headers: this._headers,
            method: `${isLiked ? "DELETE" : "PUT"}`,
        }).then(this._checkResponce);
    }

    setUserInfo({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        }).then(this._checkResponce);
    }

    setUserAvatar({avatar}) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar: avatar,
            }),
        }).then(this._checkResponce);
    }
}

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "5204ef9a-1e82-4858-b856-dcc259ab4642",
        "Content-Type": "application/json"
    }
});

export default api;