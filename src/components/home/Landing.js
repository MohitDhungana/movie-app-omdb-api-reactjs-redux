import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../Spinner';
import MoviesContainer from './MoviesContainer';

const Landing = ({ loading }) => {
  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
