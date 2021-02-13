import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(props) {
    setSelectedCard(props)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />

    <PopupWithForm name="profile" title="Редактировать профиль" submit="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field-container">
          <input name="name" id="name-input" type="text" minLength="2" maxLength="40" required className="popup__field popup__field_type_name" placeholder="Имя"></input>
          <span className="popup__input-error" id="name-input-error"></span>
        </label>
        <label className="popup__field-container">
          <input name="about" id="job-input" type="text" minLength="2" maxLength="200" required className="popup__field popup__field_type_job" placeholder="О себе"></input>
          <span className="popup__input-error" id="job-input-error"></span>
        </label>
    </PopupWithForm>

    <PopupWithForm name="add-card" title="Новое место" submit="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field-container">
          <input name="name" id="card-name-input" type="text" minLength="1" maxLength="30" required placeholder="Название" className="popup__field popup__field_type_name-card"></input>
          <span className="popup__input-error" id="card-name-input-error"></span>
        </label>
        <label className="popup__field-container">
          <input name="link" id="link-input" type="url" required placeholder="Ссылка на картинку" className="popup__field popup__field_type_link"></input>
          <span className="popup__input-error" id="link-input-error"></span>
        </label>
    </PopupWithForm>


    <PopupWithForm name="delete-card" title="Вы уверены?" submit="Да" isOpen={false} isClose={closeAllPopups}>
        <button className="popup__submit-button popup__submit-button_delete" type="submit">Да</button>
    </PopupWithForm>

    <PopupWithForm  name="avatar" title="Обновить аватар" submit="Сохранить" isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups}>
        <label className="popup__field-container">
          <input name="avatar" id="avatar-link-input" type="url" required className="popup__field popup__field_type_avatar" placeholder="Ссылка на картинку"></input>
          <span className="popup__input-error" id="avatar-link-input-error"></span>
        </label>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

  </div>
 );
}

export default App;
