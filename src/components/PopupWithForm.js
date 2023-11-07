import React from "react";
const PopupWithForm = (props) => {
  return (
    <>
      <div
        className={`popup popup_${props.name} ${
          props.isOpen ? "popup_opened" : ""
        }`}
      >
        <div className="popup__container">
          <button
            className="popup__closed"
            type="button"
            onClick={props.onClose}
          />
          <h2 className="popup__title">{props.title}</h2>
          <form
            className="popup__form popup__form_type_profile"
            name="{props.name}"
            noValidate=""
          >
            {props.children}
          </form>
          <button className="popup__add" type="submit">
            {props.infoBtn}
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupWithForm;
