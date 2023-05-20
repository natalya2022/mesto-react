import React, { useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onImagePopup }) => {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(user => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch(console.error);
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(cards => {
        setCards(cards);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__fill">
          <div className="profile__base" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit"
                type="button"
                aria-label="Редактировать"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__occupation">{userDescription}</p>
          </div>
          <button
            className="profile__add"
            type="button"
            aria-label="Добавить"
            onClick={onAddPlace}
          />
        </div>
      </section>
      <section className="photo-grid" aria-label="Фотогалерея">
        <ul className="photo-grid__places">
          {cards.map(({ _id, ...props }) => (
            <Card key={_id} onImagePopup={onImagePopup} {...props} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
