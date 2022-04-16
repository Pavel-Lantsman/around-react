import React from "react";
import addButton from '../images/addButton.svg';

function ImagePopup({card, onClose}) {

    return (
        <section className={`popup popup_type_image ${card ? "popup_visible" : ""}`}>
            <div className="popup__content-container">
                <button className="popup__close-button popup__close-button_type_image" type="button"
                        onClick={onClose}><img className="popup__close-button-icon" src={addButton} alt="cross icon"/>
                </button>
                <img
                    className='popup__image'
                    src={card ? card.link : ""}
                    alt={card ? card.name : ""}/>
                <h2 className="popup__image-text">{card ? card.name : ""}</h2>
            </div>
        </section>
    )
}

export default ImagePopup;