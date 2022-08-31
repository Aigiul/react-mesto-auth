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
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);

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

  const handleCardClick = (card) => {
    setIsImageOpen(true);
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onConfirm={handleConfirmClick}
        onCardClick={handleCardClick}
      >
      </Main>
      <Footer />
      <PopupWithForm 
        title="Редактировать профиль" 
        name="profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" className="popup__input" id="input-popup-title" defaultValue placeholder="Имя" name="name" minLength={2} maxLength={40}  required />
        <span className="popup__error-message input-popup-title-error" />
        <input type="text" className="popup__input" id="input-popup-subtitle" defaultValue placeholder="O себе" name="about" minLength={2} maxLength={200} required />
        <span className="popup__error-message input-popup-subtitle-error" />
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="place"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" className="popup__input" id="input-popup-title-card" defaultValue placeholder="Название" name="name" minLength={2} maxLength={30} required />
        <span className="popup__error-message input-popup-title-card-error" />
        <input type="URL" className="popup__input" id="input-popup-link-card" defaultValue placeholder="Ссылка на картинку" name="link" required />
        <span className="popup__error-message input-popup-link-card-error" />
      </PopupWithForm>  
      <ImagePopup
        isImageOpen={isImageOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      ></ImagePopup>
      <PopupWithForm
        title="Вы уверены?"
        name="confirmation"
        buttonText="Да"
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
      >
        <h2 className="popup__title-confirmation"></h2>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" className="popup__input" id="input-popup-link-avatar" defaultValue placeholder="Ссылка на аватар" name="avatar" required />
        <span className="popup__error-message input-popup-link-avatar-error" />
      </PopupWithForm>
    </>
  );
}

export default App;
