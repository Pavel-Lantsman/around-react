function Card({onCardClick, card, onConfirmDeleteClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="gallery__card">
            <button className="gallery__delete-button" type="button" aria-label="Delete card"
                    onClick={onConfirmDeleteClick}/>
            <img className="gallery__picture" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="gallery__text-container">
                <h2 className="gallery__text">{card.name}</h2>
                <div className="gallery__like-wrapper">
                    <button className="gallery__like-button" type="button" aria-label="Like!"/>
                    <span className="gallery__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>

    )
}

export default Card;