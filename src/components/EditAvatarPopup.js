import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditAvatarPopup = ({ isOpen, onClose }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const userAvatarRef = React.useRef();

//   React.useEffect(() => {
//     userAvatarRef.currentUser.avatar;
//   }, [currentUser]);

  // function handleClick() {
  //     videoRef.current.play();
  // }

  // function handleSubmit(e) {
  //     e.preventDefault();

  //     onUpdateAvatar({
  //       avatar: /* Значение инпута, полученное с помощью рефа */,
  //     });
  //   }

  return (
    <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isOpen} onClose={onClose}>
      <div className="popup__fill">
        <input
          className="popup__input popup__text popup__text_position_second-line popup__text_field_url"
          type="url"
          placeholder="Ссылка на аватар"
          id="form-avatar"
          name="avatar"
          required
        />
        <span className="form-avatar-error" />
      </div>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
