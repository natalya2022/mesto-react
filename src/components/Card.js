import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onImagePopup, onCardLike }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_active'}`;
  const cardLikeButtonClassName = `photo-grid__like ${isLiked && "photo-grid__like_acltive"}`;
  const handleLikeClick = () => {onCardLike(card)};

  return (
    <li className="photo-grid__place">
      <img
        src={card.link}
        alt={card.name}
        className="photo-grid__picture"
        onClick={() => onImagePopup(card.link, card.name)}
      />
      {isOwn && (
        <button className="photo-grid__delete" type="button" aria-label="Удалить изображение" />
      )}
      {/* <button className="photo-grid__delete" type="button" aria-label="Удалить изображение" /> */}
      <div className="photo-grid__rectangle">
        <h2 className="photo-grid__title">{card.name}</h2>
        <div className="photo-grid__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Добавить в избранное" onClick={handleLikeClick}/>          
          <p className="photo-grid__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
