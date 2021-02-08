import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

    <div className="popup popup_type_profile">
      <form className="popup__form popup__form_profile" action="#" name="profile" method="GET" novalidate>
        <h2 className="popup__title">Редактировать профиль</h2>
        <label className="popup__field-container">
          <input name="name" id="name-input" type="text" minlength="2" maxlength="40" required class="popup__field popup__field_type_name" placeholder="Имя"></input>
          <span className="popup__input-error" id="name-input-error"></span>
        </label>
        <label className="popup__field-container">
          <input name="about" id="job-input" type="text" minlength="2" maxlength="200" required class="popup__field popup__field_type_job" placeholder="О себе"></input>
          <span className="popup__input-error" id="job-input-error"></span>
        </label>
        <button className="popup__submit-button popup__submit-button_profile" type="submit">Сохранить</button>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
      </form>
    </div>

    <div className="popup popup_type_add-card">
      <form className="popup__form popup__form_add-card" action="#" method="GET" name="card" novalidate>
        <h2 className="popup__title">Новое место</h2>
        <label className="popup__field-container">
          <input name="name" id="card-name-input" type="text" minlength="1" maxlength="30" required placeholder="Название" class="popup__field popup__field_type_name-card"></input>
          <span className="popup__input-error" id="card-name-input-error"></span>
        </label>
        <label className="popup__field-container">
          <input name="link" id="link-input" type="url" required placeholder="Ссылка на картинку" className="popup__field popup__field_type_link"></input>
          <span className="popup__input-error" id="link-input-error"></span>
        </label>
        <button className="popup__submit-button popup__submit-button_card" type="submit">Создать</button>
        <button className="popup__close-button popup__close-button_card" type="button" aria-label="Закрыть"></button>
      </form>
    </div>

    <div className="popup popup_type_photo">
      <div className="popup__photo-container">
        <img className="popup__photo" src="#" alt="тут будет ваша картинка"></img>
        <p className="popup__photo-name"></p>
        <button className="popup__close-button popup__close-button_photo" type="button" aria-label="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_delete-card">
      <div className="popup__form popup__form_delete-card">
        <h2 className="popup__title">Вы уверены?</h2>
        <button className="popup__submit-button popup__submit-button_delete" type="submit">Да</button>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
      </div>
    </div>

    <div className="popup popup_type_avatar">
      <form className="popup__form popup__form_avatar" name="avatar" method="GET" novalidate>
        <h2 className="popup__title">Обновить аватар</h2>
        <label className="popup__field-container">
          <input name="avatar" id="avatar-link-input" type="url" required className="popup__field popup__field_type_avatar" placeholder="Ссылка на картинку"></input>
          <span className="popup__input-error" id="avatar-link-input-error"></span>
        </label>
        <button className="popup__submit-button popup__submit-button_avatar" type="submit">Сохранить</button>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
      </form>
    </div>

    <template className="cards-template">
      <ul className="element">
        <li className="element__list">
          <img className="element__image" alt=""></img>
          <button className="element__delete-button" type="button"></button>
        </li>
        <div className="element__item">
          <h2 className="element__title"></h2>
          <div className="element__like-container">
            <button type="button" className="element__like-button"></button>
            <p className="element__like-score"></p>
          </div>
        </div>
      </ul>
    </template>

  </div>
 );
}

export default App;
