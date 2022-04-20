import {useEffect, useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.value = "";
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Change profile picture'
            submitButton='Save'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_value_url"
                id="avatar-input"
                type="url"
                name="avatar"
                placeholder="Image URL"
                ref={inputRef}
                required/>
            <span className="popup__error_avatar-url popup__error avatar-input-error"/>

        </PopupWithForm>
    );
}

export default EditAvatarPopup;
