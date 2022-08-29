import React from 'react';

function Main() {
  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar'></div>
        <div className='profile__info'>
          <div className='profile__user-name'>
            <h1 className='profile__title'></h1>
            <button type="button" className='profile__edit-button'></button>
          </div>
          <p className='profile__subtitle'></p>
        </div>
        <button type="button" className='profile__add-button'></button>
      </section>
      <section className='gallery' aria-label="галерея">
        <ul className='cards'>
        </ul>
      </section>
  </main>
  );
}

export default Main;