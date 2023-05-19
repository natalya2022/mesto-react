import React, { useState } from 'react';
import ImagePopup from './ImagePopup';

const Card = ({ name, link, likes }) => {
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  return (
    <li className="photo-grid__place">
      <img
        src={link}
        alt={name}
        className="photo-grid__picture"
        onClick={() => setImagePopupOpen(true)}
      />
      <button className="photo-grid__delete" type="button" aria-label="Удалить изображение" />
      <div className="photo-grid__rectangle">
        <h2 className="photo-grid__title">{name}</h2>
        <div className="photo-grid__like-container">
          <button className="photo-grid__like" type="button" aria-label="Добавить в избранное" />
          <p className="photo-grid__counter">{likes.length}</p>
        </div>
      </div>
      {isImagePopupOpen && (
        <ImagePopup
          link={link}
          name={name}
          isOpen={isImagePopupOpen}
          onClose={() => setImagePopupOpen(false)}
        />
      )}
    </li>
  );
};

export default Card;
