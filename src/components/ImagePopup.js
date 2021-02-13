import React from 'react';

function ImagePopup(props) {
  return (
    <div className={props.card ? "popup popup_type_photo popup_opened" : "popup popup_type_photo"}>
      <div className="popup__photo-container">
        <img className="popup__photo" src={props.card.url} alt={props.card.title} />
        <p className="popup__photo-name">{props.card.title}</p>
        <button className="popup__close-button popup__close-button_photo" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
      </div>
    </div>
  )
}

export default ImagePopup;