const Card = ({ id, onDeleteClick, onCardClick, name, link, likes }) => {
  function handleClick() {
    onCardClick({ name, link });
  }
  return (
    <div className="element">
      <img
        className="element__photo"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <button
        className="element__closed"
        type="button"
        onClick={onDeleteClick}
      />
      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <div className="element__like_container">
          <button className="element__button" type="button" />
          <span className="element__like_sum">{likes.length}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
