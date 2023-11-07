import React from "react";
import "../index.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopup, setIsDeletePlacePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleDeletePlaceClick = () => {
    setIsDeletePlacePopup(!isDeletePlacePopup);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setIsDeletePlacePopup(false);
    setSelectedCard(null);
  };

  return (
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onDeleteClick={handleDeletePlaceClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Обновить аватар"
          name="editAvatar"
          infoBtn="Сохранить"
        >
          <div className="popup__inputs">
            <input
              type="url"
              className="popup__input popup__input-add"
              id="avatar"
              name="editAvatar"
              placeholder="Ссылка"
              required=""
            />
            <span
              className="popup__input-error popup__span-error"
              id="avatar-error"
            />
          </div>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title="Редактировать профиль"
          name="editProfile"
          infoBtn="Сохранить"
        >
          <div className="popup__inputs">
            <input
              type="text"
              className="popup__input popup__input-author"
              minLength={2}
              maxLength={40}
              id="name"
              name="name"
              placeholder="Имя"
              required=""
            />
            <span
              className="popup__input-error popup__span-error"
              id="name-error"
            />
            <input
              type="text"
              className="popup__input"
              id="description"
              minLength={2}
              maxLength={200}
              name="info"
              placeholder="О себе"
              required=""
            />
            <span
              className="popup__input-error popup__span-error"
              id="description-error"
            />
          </div>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          name="addPopupForm"
          infoBtn="Добавить"
        >
          <div className="popup__inputs">
            <input
              type="text"
              className="popup__input popup__input-add"
              minLength={2}
              maxLength={30}
              id="title"
              name="name"
              placeholder="Название"
              required=""
            />
            <span
              className="popup__input-error popup__span-error"
              id="title-error"
            />
            <input
              type="url"
              className="popup__input"
              id="card"
              name="link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span
              className="popup__input-error popup__span-error"
              id="card-error"
            />
          </div>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isDeletePlacePopup}
          onClose={closeAllPopups}
          title="Вы уверены?"
          name="deleteCard"
          infoBtn="Да"
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}>
        </ImagePopup>
      </div>
  );
}

export default App;
