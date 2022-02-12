import {Component} from 'react'

import MovieItem from '../MovieItem'

import './index.css'

const API_KEY = 'ce762116'

class MoviePage extends Component {
  state = {
    searchInput: '',
    moviesData: [],
    movieName: '',
    directorName: '',
    releaseDate: '',
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async imdbID => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`,
    )
    const data = response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      director: eachItem.director,
      releaseDate: eachItem.release_date,
    }))
    this.setState({moviesData: formattedData})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAddMovie = () => {
    const {movieName, directorName, releaseDate} = this.state
    const newMovies = {
      movieName,
      directorName,
      releaseDate,
    }

    this.setState(prevState => ({
      moviesData: [...prevState.movieData, newMovies],
      movieName: '',
      directorName: '',
      releaseDate: '',
    }))
  }

  render() {
    const {searchInput, moviesData} = this.state
    return (
      <div className="movie-list-container">
        <h1 className="heading">Film Web App</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            className="input-search-box"
            placeholder="Search Movies"
            value={searchInput}
          />
          <select className="select-element">
            <option className="options">Date</option>
            <option className="options">Title</option>
          </select>
        </div>
        <div>
          <button type="submit" className="button" onClick={this.onAddMovie}>
            Add Movie
          </button>
        </div>
        {moviesData.map(item => (
          <MovieItem movieData={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default MoviePage
