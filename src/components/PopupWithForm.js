import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
      <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className={`popup__submit-button popup__submit-button_${props.name}`} type="submit">{props.submit}</button>
        <button className={`popup__close-button popup__close-button_${props.name}`} onClick={props.onClose}></button>
        
      </form>
    </div>
  )
}

export default PopupWithForm;