import React from 'react';

function ImagePopup(props) {
    if (props.card) {
        return (
          <div className="popup popup_type_photo popup_opened">
            <div className="popup__photo-container">
              <img className="popup__photo" src={props.card.url} alt={props.card.title} />
              <p className="popup__photo-name">{props.card.title}</p>
              <button className="popup__close-button popup__close-button_photo" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
            </div>
          </div>
        )
    }
    else return null;
}

export default ImagePopup;