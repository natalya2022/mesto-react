import { useState } from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import FormEdit from './FormEdit';
import FormAdd from './FormAdd';
import FormAvatar from './FormAvatar';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [imageData, setImageData] = useState({ link: '', name: '' });

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

  return (
    <div className="root">
      <div className="page">
        <div className="wrap">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onImagePopup={handleImagePopupClick}
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
  );
}

export default App;
