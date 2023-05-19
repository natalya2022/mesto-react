import React from 'react';

const FormAdd = () => {
  return (
    <div>
      <div className="popup__fill">
        <input
          className="popup__input popup__text popup__text_position_first-line popup__text_field_place"
          type="text"
          placeholder="Название"
          id="form-place"
          name="name"
          required
          minLength={2}
          maxLength={30}
        />
        <span className="form-place-error" />
        <input
          className="popup__input popup__text popup__text_position_second-line popup__text_field_url"
          type="url"
          placeholder="Ссылка на картинку"
          id="form-url"
          name="link"
          required
        />
        <span className="form-url-error" />
      </div>
      <button className="popup__save popup__save_style" type="submit">
        Создать
      </button>
    </div>
  );
};

export default FormAdd;
