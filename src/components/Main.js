import React, { useEffect, useState } from 'react';
import {api} from '../utils/Api';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.error(err);
      });
    
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
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
        <ul className='cards'>{cards.map((data) => {
          return (
            <li className="card" key={data._id}>
              <button type="button" className="card__delete-button" />
              <img className="card__image" src={data.link} alt="#" />
              <div className="card__info">
                <h2 className="card__title">{data.name}</h2>
                <div className="card__like-number-container">
                  <button type="button" className="card__like" />
                  <span className="card__like-number">{data.likes.length}</span>
                </div>
              </div>
            </li>
          );
        })}
        </ul>
      </section>
  </main>
  );
}

export default Main;