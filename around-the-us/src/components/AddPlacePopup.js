import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlaceSubmit}) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setTitle("");
        setLink("");
    }, []);

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newCard = {name: title, link: link};
        onAddPlaceSubmit(newCard);
    }

    return (
        <PopupWithForm
            name='addCard'
            title='New Place'
            submitButton='Create'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_value_title"
                id="title-input"
                type="text"
                name="title"
                placeholder="Title"
                minLength="1"
                maxLength="30"
                onChange={handleTitleChange}
                value={title || ""}
                required
            />
            <span className="popup__error_addCard-name popup__error title-input-error"/>
            <input
                className="popup__input popup__input_value_url"
                id="url-input"
                type="url"
                name="url"
                placeholder="Image URL"
                onChange={handleLinkChange}
                value={link || ""}
                required
            />
            <span className="popup__error_addCard-url popup__error url-input-error"/>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
