function Card({ card, onCardClick }) {
  return (
    <li className="card">
      <button type="button" className="card__delete-button" />
      <img 
        className="card__image"
        src={card.link}
        onClick={() => {
          onCardClick(card);
        }}/>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-number-container">
          <button type="button" className="card__like" />
          <span className="card__like-number">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;