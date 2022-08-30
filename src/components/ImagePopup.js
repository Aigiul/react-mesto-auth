import React from "react";

function ImagePopup () {
  return (
    <div className="popup popup_view-card">
      <div className="popup__preview">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="Фото места" />
          <figcaption className="popup__figcaption" />
        </figure>
        <button type="button" className="popup__close-button" />
      </div>
    </div>
  );
}

export default ImagePopup;