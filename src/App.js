import React, { Component } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.searchMovies = this.searchMovies.bind(this);
  }
  state = {
    movies: [],
  };

  searchMovies(movie) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f253d49332ce1bab9054b6c0b810226&language=en-US&query=${movie}`)
      .then(res => res.json())
      .then(movies => this.setState({ movies: movies.results }));
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Search onSearch={this.searchMovies} />
        <div className="row">
          {this.state.movies.map(movie => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default App;
