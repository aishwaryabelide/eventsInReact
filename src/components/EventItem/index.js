import './index.css'

const EventItem = props => {
  const {cardDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = cardDetails
  const eventImageClassName = isActive ? 'card-img active' : 'card-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="card">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
