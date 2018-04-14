import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
  state = {
    movie: undefined,
  };
  async componentDidMount() {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${
      this.props.match.params.id
    }?api_key=98325a9d3ed3ec225e41ccc4d360c817`);
    const movie = await result.json();
    this.setState({ movie });
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        {!movie ? (
          <h1>No data!</h1>
        ) : (
          <div style={{ margin: '50px 0px 0px' }}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="thumbnail"
                  alt={movie.original_title}
                />
              </div>
              <div className="col-md-8">
                <h2>{movie.Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {movie.release_date}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {movie.vote_average}
                  </li>
                  <li className="list-group-item">
                    <strong>IMDB Rating: </strong>
                    {movie.vote_average}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {movie.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {movie.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong>
                    {movie.Actors}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="well">
                <h3>Plot</h3>
                {movie.overview}
                <hr />
                <a
                  href={`http://imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  className="btn btn-primary"
                >
                  View IMDB
                </a>
                <Link to="/" className="btn btn-default">
                  Go Back To Search
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Movie;
