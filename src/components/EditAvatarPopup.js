import React from "react";
return 
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