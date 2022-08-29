import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <div className="popup popup_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="profile-form" className="popup__form" id="popup-form-reduct" noValidate>
            <input type="text" className="popup__input" id="input-popup-title" value placeholder="Имя" name="name" minlength={2} maxlength={40}  required />
            <span  className="popup__error-message input-popup-title-error" />
            <input type="text" className="popup__input" id="input-popup-subtitle" value placeholder="O себе" name="about" minlength={2} maxlength={200} required />
            <span className="popup__error-message input-popup-subtitle-error" />
            <button type="submit" className="popup__save-button" disabled>Сохранить</button>
            <button type="button" className="popup__close-button" />
          </form>
        </div>
      </div>
      <div className="popup popup_add-card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="card-form" className="popup__form" id="popup-form-add-card" noValidate>
            <input type="text" className="popup__input" id="input-popup-title-card" value placeholder="Название" name="name" minlength={2} maxlength={30} required />
            <span className="popup__error-message input-popup-title-card-error" />
            <input type="URL" className="popup__input" id="input-popup-link-card" value placeholder="Ссылка на картинку" name="link" required />
            <span className="popup__error-message input-popup-link-card-error" />
            <button type="submit" className="popup__save-button" disabled>Создать</button>
            <button type="button" className="popup__close-button" />
          </form>
        </div>
      </div>
      <div className="popup popup_view-card">
        <div className="popup__preview">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="Фото места" />
            <figcaption className="popup__figcaption" />
          </figure>
          <button type="button" className="popup__close-button" />
        </div>
      </div>
      <div className="popup popup_confirmation">
        <div className="popup__container">
          <form id="form_remove" className="popup__form">
            <h2 className="popup__title-confirmation">Вы уверены?</h2>
            <button type="submit" className="popup__save-button">Да</button>
          </form>
          <button type="button" className="popup__close-button" id="close_remove" />
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="avatar-form" className="popup__form" id="popup-form-avatar" noValidate>
            <input type="url" className="popup__input" id="input-popup-link-avatar" value placeholder="Ссылка на аватар" name="avatar" required />
            <span className="popup__error-message input-popup-link-avatar-error" />
            <button type="submit" className="popup__save-button" disabled>Сохранить</button>
            <button type="button" className="popup__close-button" />
          </form>
        </div>
      </div>
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
    </div>
  );
}

export default App;
