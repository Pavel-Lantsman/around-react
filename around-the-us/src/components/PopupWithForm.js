import React from "react";
import addButton from '../images/addButton.svg';

function PopupWithForm(
    {
        name,
        isOpen,
        title,
        onClose,
        submitButton,
        children,
    }
) {

    return (
        <section className={`popup popup_type_${name} ${isOpen ? "popup_visible" : ""}`}>
            <div className="popup__form-container">
                <button className="popup__close-button popup__close-button_type_edit" type="button"
                        onClick={onClose}><img className="popup__close-button-icon" src={addButton} alt="cross icon"/>
                </button>
                <form className={`popup__form popup__form-${name}`} action="#" name={`form-${name}`}>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__button" type="submit" aria-label="Save changes">{submitButton}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;