import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
      <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {/* <label className="popup__field-container">
          <input name="name" id="card-name-input" type="text" minlength="1" maxlength="30" required placeholder="Название" class="popup__field popup__field_type_name-card"></input>
          <span className="popup__input-error" id="card-name-input-error"></span>
        </label>
        <label className="popup__field-container">
          <input name="link" id="link-input" type="url" required placeholder="Ссылка на картинку" className="popup__field popup__field_type_link"></input>
          <span className="popup__input-error" id="link-input-error"></span>
        </label> */}{props.children}
        <button className={`popup__submit-button popup__submit-button_${props.name}`} type="submit">{props.submit}</button>
        <button className={`popup__close-button popup__close-button_${props.name}`} onClick={props.onClose} aria-label="Закрыть"></button>
        
      </form>
    </div>
  )
}

export default PopupWithForm;