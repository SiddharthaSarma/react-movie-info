import React, { Component } from 'react';
import Search from './Search';
import Card from './Card';
import Pagination from './Pagination';

class Movies extends Component {
  constructor() {
    super();
    this.searchMovies = this.searchMovies.bind( this );
  }
  state = {
    movies: [],
    pages: 0
  };

  searchMovies ( movie ) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
      }&language=en-US&query=${movie}`
    )
      .then( res => res.json() )
      .then( movies => this.setState( {
        movies: movies.results,
        pages: Math.floor( movies.total_results / 20 )
      } ) );
  }

  render () {
    return (
      <div className="container">
        <Search onSearch={this.searchMovies} />
        <div className="row">
          {this.state.movies.map( movie => (
            <Card key={movie.id} movie={movie} />
          ) )}
        </div>
        <div className="row">
          <Pagination pages={this.state.pages} />
        </div>
      </div>
    );
  }
}

export default Movies;
