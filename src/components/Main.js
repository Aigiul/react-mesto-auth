import React from 'react';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={onEditAvatar}></div>
        <div className='profile__info'>
          <div className='profile__user-name'>
            <h1 className='profile__title' />
            <button type="button" className='profile__edit-button' onClick={onEditProfile} />
          </div>
          <p className='profile__subtitle'></p>
        </div>
        <button type="button" className='profile__add-button' onClick={onAddPlace}></button>
      </section>
      <section className='gallery' aria-label="галерея">
        <ul className='cards'>
        </ul>
      </section>
  </main>
  );
}

export default Main;