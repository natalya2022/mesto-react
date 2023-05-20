import React from 'react';

const FormAvatar = () => {
  return (
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
  );
};

export default FormAvatar;
