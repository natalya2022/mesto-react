import React from 'react';

const FormEdit = () => {
  return (
    <div>
      <div className="popup__fill">
        <input
          className="popup__input popup__text popup__text_position_first-line popup__text_field_name"
          type="text"
          placeholder="Имя"
          id="form-name"
          name="name"
          required
          minLength={2}
          maxLength={40}
        />
        <span className="form-name-error" />
        <input
          className="popup__input popup__text popup__text_position_second-line popup__text_field_occupation"
          type="text"
          placeholder="Занятие"
          id="form-job"
          name="about"
          required
          minLength={2}
          maxLength={200}
        />
        <span className="form-job-error" />
      </div>
      <button className="popup__save popup__save_style" type="submit">
        Сохранить
      </button>
    </div>
  );
};

export default FormEdit;
