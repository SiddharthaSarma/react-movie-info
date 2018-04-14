import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Movies from './Movies';
import Movie from './Movie';

const App = () => (
  <Router>
    <div className="container-fluid">
      <Link to="/">
        <Navbar />
      </Link>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movie/:id" exact component={Movie} />
      </Switch>
    </div>
  </Router>
);

export default App;
