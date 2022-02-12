import './index.css'

const MovieItem = props => {
  const {movieData} = props
  const {id, imageUrl, title, avatarUrl, director, releaseDate} = movieData
  return (
    <div className="item-container">
      <img src={imageUrl} alt={`item${id}`} className="item-image" />
      <div className="item-info">
        <p className="item-title">{title}</p>
        <div className="author-info">
          <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
          <p className="director-name">{director}</p>
          <p className="director-name">{releaseDate}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
