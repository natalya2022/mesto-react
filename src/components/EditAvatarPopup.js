import React from 'react';
import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
//   const currentUser = React.useContext(CurrentUserContext);
  const userAvatarRef = React.useRef();

  React.useEffect(() => {
    userAvatarRef.current.value = '';
  });

//   function handleChangeAvatar(e) {
    
//     return userAvatarRef.current.avatar;
//   }

  function handleSubmit(e) {
      e.preventDefault();
      onUpdateAvatar({
        avatar: userAvatarRef.current.value,
      });
    }

  return (
    <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__fill">
        <input
          className="popup__input popup__text popup__text_position_second-line popup__text_field_url"
          type="url"
          placeholder="Ссылка на аватар"
          id="form-avatar"
          name="avatar"
          required
          ref={userAvatarRef}
        //   onChange={handleChangeAvatar}
        />
        <span className="form-avatar-error" />
      </div>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
