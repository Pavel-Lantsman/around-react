import React, {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";
import addButton from '../images/addButton.svg';
import pencil from '../images/pencil.svg';
import editButton from '../images/editButton.svg';

function Main(
    {
        onEditProfileClick,
        onEditAvatarClick,
        onAddPlaceClick,
        onCardClick,
        onConfirmDeleteClick,
    }) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });

        api
            .getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

    return (

        <main>
            <section className="user">
                <div className="user__avatar-wrapper" onClick={onEditAvatarClick}>
                    <img className="user__avatar" src={userAvatar} alt="user avatar"/>
                    <img className="user__avatar-icon" src={pencil} alt="white pencil icon"/>
                </div>
                <div className="user__text-container">
                    <div className="user__title-container">
                        <h1 className="user__name">{userName}</h1>
                        <button className="user__edit-button" type="button" aria-label="Edit profile"
                                onClick={onEditProfileClick}>
                            <img className="user__edit-button-icon" src={editButton}
                                 alt="white pencil icon"/>
                        </button>
                    </div>
                    <p className="user__info">{userDescription}</p>
                </div>
                <button className="user__add-button" type="button" aria-label="Add picture" onClick={onAddPlaceClick}>
                    <img src={addButton} alt="white cross"/>
                </button>
            </section>

            <section className="gallery">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onConfirmDeleteClick={onConfirmDeleteClick}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;