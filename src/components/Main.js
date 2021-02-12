import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main (props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);



  // Загрузка данных пользователя с сервера
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  // Загрузка данных пользователя с сервера
	React.useEffect(() => {
		api.getInitialCards().then(
			(res) => {
				const initialCards = res.map(item => ({
					title: item.name,
					url: item.link,
					likes: item.likes.length,
					id: item._id,
				}))
				setCards(initialCards)
			}).catch((err) => {
				console.log(err);
			});
	}, []);

  return(
    <main className="content">
    <section className="profile">
      <button className="profile__avatar-button" onClick={props.onEditAvatar}>
        <img className="profile__avatar" src={userAvatar} alt='аватар'></img>
      </button>
      <div className="profile__info">
        <div className="profile__list">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__subtitle">{userDescription}</p>
      </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>

    <section className="elements">
      {cards.map((card) => <Card key={card.id} card={card} onCardClick={props.onCardClick} />)}
    </section>
  </main>
  )
}

export default Main;