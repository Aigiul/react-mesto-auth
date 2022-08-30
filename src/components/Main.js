import React, { useEffect, useState } from 'react';
import {api} from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (userName) {
      return;
    }
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className='profile__info'>
          <div className='profile__user-name'>
            <h1 className='profile__title'>{userName}</h1>
            <button type="button" className='profile__edit-button' onClick={onEditProfile} />
          </div>
          <p className='profile__subtitle'>{userDescription}</p>
        </div>
        <button type="button" className='profile__add-button' onClick={onAddPlace}></button>
      </section>
      <section className='gallery' aria-label="галерея">
        <ul className="cards">{cards.map((data) => {
          return <Card card={data} key={data._id} onCardClick={onCardClick} />;
        })}
        </ul>
      </section>
  </main>
  );
}

export default Main;