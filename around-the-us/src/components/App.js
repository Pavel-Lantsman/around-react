import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";
import {useEffect, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(undefined);
    const [currentUser, setCurrentUser] = useState({
        name: "",
        about: "",
        avatar: "",
    });
    const [cards, setCards] = useState([]);


    function handleCardLike(card) {
        const isLiked = card.likes.some((user) => user._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((currentCard) =>
                        currentCard._id === card._id ? newCard : currentCard
                    )
                );
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) =>
                    state.filter((currentCard) => currentCard._id !== card._id)
                );
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    useEffect(() => {
        api
            .getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

    useEffect(() => {
        api
            .getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

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

    function handleUpdateUser(currentUser) {
        api.setUserInfo({name: currentUser.name, about: currentUser.about})
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    function handleUpdateAvatar(currentUser) {
        api.setUserAvatar({avatar: currentUser.avatar})
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    function handleAddPlaceSubmit(newCard) {
        api.createCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }

    return (
        <div className="page">
            <div className='wrapper'>
                <CurrentUserContext.Provider value={currentUser}>
                    <Header/>

                    <Main
                        onEditProfileClick={handleEditProfileClick}
                        onAddPlaceClick={handleAddPlaceClick}
                        onEditAvatarClick={handleEditAvatarClick}
                        onConfirmDeleteClick={handleConfirmDeleteClick}
                        cards={cards}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />

                    <Footer/>

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />

                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlaceSubmit={handleAddPlaceSubmit}
                    />

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />


                    <PopupWithForm
                        name='delete'
                        title='Are you sure?'
                        submitButton='Yes'
                        isOpen={isConfirmDeletePopupOpen}
                        onClose={closeAllPopups}
                    />

                    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                </CurrentUserContext.Provider>
            </div>
        </div>
    );
}


export default App;
