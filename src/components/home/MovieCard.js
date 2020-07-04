import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="col-md-3 mb-5">
    <div className="card card-body bg-dark text-center h-100">
      <img src={movie.Poster} alt="" className="w-100 mb-2" />
      <h5 className="text-light card-title">
        {movie.Title} - {movie.Year}
      </h5>
      <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
        Movie Details
        <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  </div>
);

export default MovieCard;
