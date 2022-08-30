import React from "react";

function PopupWithForm (props) {
  return (
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form name={props.name} className="popup__form" noValidate>
            {props.children}
          <button type="button" className="popup__close-button" onClick={props.onClose} />
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;