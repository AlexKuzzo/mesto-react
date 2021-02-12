import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
  <div className="cards-template" key={props.card._id} onClick={handleClick}>
    <ul className="element">
      <li className="element__list">
        <img className="element__image" src={props.card.url} alt={props.card.name} />
        <button className="element__delete-button" type="button"></button>
      </li>
      <div className="element__item">
        <h2 className="element__title">{props.card.title}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-button"></button>
          <p className="element__like-score">{props.card.likes}</p>
        </div>
      </div>
    </ul>
  </div>
  )
}

export default Card;