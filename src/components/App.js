import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <PopupWithForm title="Редактировать профиль" name="edit">
        <input type="text" className="popup__input" id="input-popup-title" defaultValue placeholder="Имя" name="name" minlength={2} maxlength={40}  required />
        <span className="popup__error-message input-popup-title-error" />
        <input type="text" className="popup__input" id="input-popup-subtitle" defaultValue placeholder="O себе" name="about" minlength={2} maxlength={200} required />
        <span className="popup__error-message input-popup-subtitle-error" />
        <button type="submit" className="popup__save-button" disabled>Сохранить</button>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="add-card">
        <input type="text" className="popup__input" id="input-popup-title-card" value placeholder="Название" name="name" minlength={2} maxlength={30} required />
        <span className="popup__error-message input-popup-title-card-error" />
        <input type="URL" className="popup__input" id="input-popup-link-card" value placeholder="Ссылка на картинку" name="link" required />
        <span className="popup__error-message input-popup-link-card-error" />
        <button type="submit" className="popup__save-button" disabled>Создать</button>
      </PopupWithForm>  
      <ImagePopup></ImagePopup>
      <PopupWithForm title="Вы уверены?" name="confirm">
        <h2 className="popup__title-confirmation"></h2>
        <button type="submit" className="popup__save-button">Да</button>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" name="avatar">
        <input type="url" className="popup__input" id="input-popup-link-avatar" defaultValue placeholder="Ссылка на аватар" name="avatar" required />
        <span className="popup__error-message input-popup-link-avatar-error" />
        <button type="submit" className="popup__save-button" disabled>Сохранить</button>
      </PopupWithForm>
      <template id="card-template">
        <li className="card">
          <button type="button" class="card__delete-button" />
          <img className="card__image" src="#" alt="#" />
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-number-container">
              <button type="button" className="card__like" />
              <span className="card__like-number" />
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
