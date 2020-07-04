import React from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from '../../actions/searchActions';

const SearchForm = ({ text, searchMovie, fetchMovies, setLoading }) => {
  const onChange = (e) => {
    searchMovie(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchMovies(text);
    setLoading();
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search"> Search for a movie, TV series...</i>
        </h1>

        <form id="searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search for a movie, TV series..."
            onChange={onChange}
          />

          <button className="btn btn-primary btn-bg mt-3">Search</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm);

// const mapDispatchToProps = (dispatch) => ({
//   searchMovie: (text) => dispatch(searchMovie(text)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
