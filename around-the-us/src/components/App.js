import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useState} from "react";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(undefined);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleConfirmDeleteClick() {
        setIsConfirmDeletePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmDeletePopupOpen(false);
        setSelectedCard(undefined);
    }

    return (
        <div className="page">
            <div className='wrapper'>
                <Header/>
                <Main
                    onEditProfileClick={handleEditProfileClick}
                    onAddPlaceClick={handleAddPlaceClick}
                    onEditAvatarClick={handleEditAvatarClick}
                    onConfirmDeleteClick={handleConfirmDeleteClick}
                    onCardClick={handleCardClick}
                />

                <Footer/>

                <PopupWithForm
                    name='profile'
                    title='Edit profile'
                    submitButton='Save'
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input className="popup__input popup__input_value_name" id="name-input" type="text" name="name"
                           placeholder="Your name" minLength="2" maxLength="40" required/>
                    <span className="popup__error name-input-error"/>
                    <input className="popup__input popup__input_value_about" id="about-input" type="text"
                           name="about"
                           placeholder="About me" minLength="2" maxLength="200" required/>
                    <span className="popup__error_profile-about popup__error about-input-error"/>

                </PopupWithForm>

                <PopupWithForm
                    name='addCard'
                    title='New Place'
                    submitButton='Create'
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input className="popup__input popup__input_value_title" id="title-input" type="text"
                           name="title"
                           placeholder="Title" minLength="1" maxLength="30" required/>
                    <span className="popup__error_addCard-name popup__error title-input-error"/>
                    <input className="popup__input popup__input_value_url" id="url-input" type="url" name="url"
                           placeholder="Image URL" required/>
                    <span className="popup__error_addCard-url popup__error url-input-error"/>

                </PopupWithForm>

                <PopupWithForm
                    name='avatar'
                    title='Change profile picture'
                    submitButton='Save'
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <input className="popup__input popup__input_value_url" id="avatar-input" type="url"
                           name="avatar"
                           placeholder="Image URL" required/>
                    <span className="popup__error_avatar-url popup__error avatar-input-error"/>

                </PopupWithForm>


                <PopupWithForm
                    name='delete'
                    title='Are you sure?'
                    submitButton='Yes'
                    isOpen={isConfirmDeletePopupOpen}
                    onClose={closeAllPopups}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </div>
        </div>
    );
}


export default App;
