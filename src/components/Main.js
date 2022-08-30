import React from 'react';

function Main() {
  function handleEditAvatarClick() {
		document.querySelector(".popup_type_avatar").classList.add("popup_opened");
	}

  function handleEditProfileClick() {
		document.querySelector(".popup_type_edit").classList.add("popup_opened");
	}

  function handleAddPlaceClick() {
		document.querySelector(".popup_type_add-card").classList.add("popup_opened");
	}

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={handleEditAvatarClick}></div>
        <div className='profile__info'>
          <div className='profile__user-name'>
            <h1 className='profile__title' />
            <button type="button" className='profile__edit-button' onClick={handleEditProfileClick} />
          </div>
          <p className='profile__subtitle'></p>
        </div>
        <button type="button" className='profile__add-button' onClick={handleAddPlaceClick}></button>
      </section>
      <section className='gallery' aria-label="галерея">
        <ul className='cards'>
        </ul>
      </section>
  </main>
  );
}

export default Main;