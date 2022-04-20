import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {useContext} from "react";


function Card({onCardClick, card, onConfirmDeleteClick, onCardDelete, onCardLike}) {

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    const cardDeleteButtonClassName = (`gallery__delete-button ${isOwn ? '' : 'button_hidden'}`);
    const cardLikeButtonClassName = (`gallery__like-button  ${isLiked ? 'gallery__like-button_active' : ''}`);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }



    return (
        <div className="gallery__card">
            <button
                className={cardDeleteButtonClassName}
                type="button"
                aria-label="Delete card"
                onClick={handleDeleteClick}
            />
            <img
                className="gallery__picture"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <div className="gallery__text-container">
                <h2 className="gallery__text">{card.name}</h2>
                <div className="gallery__like-wrapper">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        aria-label="Like!"
                        onClick={handleLikeClick}
                    />
                    <span className="gallery__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )


}

export default Card;