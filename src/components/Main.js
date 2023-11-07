import React from "react";
import api from "../utils/api";
import Card from "./Card";

const Main = ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onDeleteClick,
}) => {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <button className="profile__avatar-button" onClick={onEditAvatar} />
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__author">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="content">
        <div className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              onDeleteClick={onDeleteClick}
              onCardClick={onCardClick}
              link={card.link}
              name={card.name}
              likes={[...card.likes]}
            />
          ))}
        </div>
      </section>
      <template id="template" />
    </main>
  );
};

export default Main;
