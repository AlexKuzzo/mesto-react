import React from 'react';
import avatar from '../images/avatar.jpg';

function Main (props) {
  return(
    <main className="content">
    <section className="profile">
      <button className="profile__avatar-button" onClick={props.onEditAvatar}>
        <img className="profile__avatar" src={avatar} alt='аватар'></img>
      </button>
      <div className="profile__info">
        <div className="profile__list">
          <h1 className="profile__title">Жак Ив Кусто</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>

    <section className="elements"></section>
  </main>
  )
}

export default Main;