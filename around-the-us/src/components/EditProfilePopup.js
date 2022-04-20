import {useContext, useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Edit profile'
            submitButton='Save'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_value_name"
                id="name-input"
                type="text"
                name="name"
                placeholder="Your name"
                minLength="2"
                maxLength="40"
                required
                value={name || ""}
                onChange={handleNameChange}
            />
            <span className="popup__error name-input-error"/>
            <input
                className="popup__input popup__input_value_about"
                id="about-input"
                type="text"
                name="about"
                placeholder="About me"
                minLength="2"
                maxLength="200"
                value={description || ""}
                onChange={handleDescriptionChange}
                required/>
            <span className="popup__error_profile-about popup__error about-input-error"/>

        </PopupWithForm>
    );
}

export default EditProfilePopup;
