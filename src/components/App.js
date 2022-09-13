import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
    
  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then(() => {
    const newCards = cards.filter((item) => {
      return card._id !== item._id;
    });
    setCards(newCards);
  })
  .catch((err) => {
    console.error(err);
  });
}


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

  function handleAddPlaceSubmit(card) {
    api
    .addCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err)=> {
      console.error(err);
    })
  }

  function handleUpdateUser(userData) {
    api.addProfileInfo(userData)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err)=> {
      console.error(err);
    })
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onConfirm={handleConfirmClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
        onSubmit={handleAddPlaceSubmit}
      >
      </Main>
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
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
      
      <AddPlacePopup
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        closeAllPopups={closeAllPopups}
        onSubmit={handleAddPlaceSubmit}
      ></AddPlacePopup>
    </CurrentUserContext.Provider>
  );
}

export default App;
