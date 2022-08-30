import React from "react";

function PopupWithForm ({ title, name, children, isOpen, onClose }) {
  return (
    <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form name={name} className="popup__form" noValidate>
            {children}
          <button type="button" className="popup__close-button" onClick={onClose} />
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;