import { useState } from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import FormEdit from './FormEdit';
import FormAdd from './FormAdd';
import FormDelete from './FormDelete';
import FormAvatar from './FormAvatar';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = evt => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = evt => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = evt => {
    setAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  };

  return (
    <div className="root">
      <div className="page">
        <div className="wrap">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          />
          <Footer />
        </div>
        <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <FormAvatar/>
        </PopupWithForm>
        <PopupWithForm title={'Редактировать профиль'} name={'profile'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <FormEdit/>
        </PopupWithForm>
        <PopupWithForm title={'Новое место'} name={'place'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <FormAdd/>
        </PopupWithForm>
        <ImagePopup />
      </div>
    </div>
  );
}

export default App;
