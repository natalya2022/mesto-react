import React, { useState } from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import FormEdit from './FormEdit';
import FormAdd from './FormAdd';
import FormAvatar from './FormAvatar';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [imageData, setImageData] = useState({ link: '', name: '' });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(user => {
        setCurrentUser(user);
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

  const handleEditAvatarClick = evt => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = evt => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = evt => {
    setAddPlacePopupOpen(true);
  };

  const handleImagePopupClick = (link, name) => {
    setImagePopupOpen(true);
    setImageData({ link, name });
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .likeCard(card._id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
      })
      .catch(console.error);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(newCards => {
        setCards(cards => cards.filter(c => c._id !== card._id));
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <div className="wrap">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onImagePopup={handleImagePopupClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
            />
            <Footer />
          </div>
          <PopupWithForm
            title={'Обновить аватар'}
            name={'avatar'}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <FormAvatar />
          </PopupWithForm>
          <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <FormEdit />
          </PopupWithForm>
          <PopupWithForm
            title={'Новое место'}
            name={'place'}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText={'Создать'}
          >
            <FormAdd />
          </PopupWithForm>
          <ImagePopup
            link={imageData.link}
            name={imageData.name}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
