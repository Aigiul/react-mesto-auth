import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

  //обработчики событий попапов
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleConfirmClick = () => {
    setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onConfirm={handleConfirmClick}>
      </Main>
      <Footer />
      <PopupWithForm 
        title="Редактировать профиль" 
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" className="popup__input" id="input-popup-title" defaultValue placeholder="Имя" name="name" minLength={2} maxLength={40}  required />
        <span className="popup__error-message input-popup-title-error" />
        <input type="text" className="popup__input" id="input-popup-subtitle" defaultValue placeholder="O себе" name="about" minLength={2} maxLength={200} required />
        <span className="popup__error-message input-popup-subtitle-error" />
        <button type="submit" className="popup__save-button" disabled>Сохранить</button>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" className="popup__input" id="input-popup-title-card" defaultValue placeholder="Название" name="name" minLength={2} maxLength={30} required />
        <span className="popup__error-message input-popup-title-card-error" />
        <input type="URL" className="popup__input" id="input-popup-link-card" defaultValue placeholder="Ссылка на картинку" name="link" required />
        <span className="popup__error-message input-popup-link-card-error" />
        <button type="submit" className="popup__save-button" disabled>Создать</button>
      </PopupWithForm>  
      <ImagePopup></ImagePopup>
      <PopupWithForm
        title="Вы уверены?"
        name="confirmation"
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      >
        <h2 className="popup__title-confirmation"></h2>
        <button type="submit" className="popup__save-button">Да</button>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" className="popup__input" id="input-popup-link-avatar" defaultValue placeholder="Ссылка на аватар" name="avatar" required />
        <span className="popup__error-message input-popup-link-avatar-error" />
        <button type="submit" className="popup__save-button" disabled>Сохранить</button>
      </PopupWithForm>
    </>
  );
}

export default App;
