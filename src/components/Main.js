import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {api} from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike }) {
  const [cards, setCards] = useState([]);
  const { name, about, avatar } = useContext(CurrentUserContext);
  const currentUserId = useContext(CurrentUserContext)._id;

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
    const isLiked = card.likes.some(i => i._id === currentUserId);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 



  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={onEditAvatar} style={{ backgroundImage: `url(${avatar})` }}></div>
        <div className='profile__info'>
          <div className='profile__user-name'>
            <h1 className='profile__title'>{name}</h1>
            <button type="button" className='profile__edit-button' onClick={onEditProfile} />
          </div>
          <p className='profile__subtitle'>{about}</p>
        </div>
        <button type="button" className='profile__add-button' onClick={onAddPlace}></button>
      </section>
      <section className='gallery' aria-label="галерея">
        <ul className="cards">{cards.map((data) => {
          return <Card card={data} id={data._id} key={data._id} onCardClick={onCardClick} onCardLike={handleCardLike} />
        })}
        </ul>
      </section>
  </main>
  );
}

export default Main;