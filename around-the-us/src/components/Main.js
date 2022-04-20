import React, {useContext} from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import addButton from '../images/addButton.svg';
import pencil from '../images/pencil.svg';
import editButton from '../images/editButton.svg';

function Main(
    {
        onEditProfileClick,
        onEditAvatarClick,
        onAddPlaceClick,
        onCardClick,
        onCardDelete,
        onConfirmDeleteClick,
        onCardLike,
        cards
    }) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="user">
                <div className="user__avatar-wrapper" onClick={onEditAvatarClick}>
                    <img className="user__avatar" src={currentUser.avatar} alt="user avatar"/>
                    <img className="user__avatar-icon" src={pencil} alt="white pencil icon"/>
                </div>
                <div className="user__text-container">
                    <div className="user__title-container">
                        <h1 className="user__name">{currentUser.name}</h1>
                        <button className="user__edit-button" type="button" aria-label="Edit profile"
                                onClick={onEditProfileClick}>
                            <img className="user__edit-button-icon" src={editButton}
                                 alt="white pencil icon"/>
                        </button>
                    </div>
                    <p className="user__info">{currentUser.about}</p>
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
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;