import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = props => (
  <div className="col-sm-6 col-lg-2">
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.movie.title}</h5>
      </div>
      <img
        style={{ height: '200px', width: '100%', display: 'block' }}
        src={`https://image.tmdb.org/t/p/w154${props.movie.poster_path}`}
        alt={props.movie.title}
      />
      <div className="card-body">
        <Link to={`/movie/${props.movie.id}`}>View Details</Link>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  </div>
);

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};
export default Card;
