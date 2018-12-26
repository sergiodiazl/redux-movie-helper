import React from "react";
import Movies from '../components/Movies'
import { connect } from 'react-redux';
import{nextPage,previousPage, generateMovieListUrl, fetchMovieList}from '../actions'
class MoviesContainer extends React.Component {
  nextPageClick=()=>{
    console.log("next")
    this.props.nextPage();
  }
  previousPageClick=()=>{
    this.props.previousPage();
  }
  render() {
    const { movies ,page,totalPages,texts} = this.props;
    return (
      <Movies movies={movies}
      page={page}
      totalPages={totalPages}
     nextPage={this.nextPageClick}
     previousPage={this.previousPageClick}
     texts={texts}
      />
    );
  }
}
const mapStateToProps = state => ({
  page:state.page,
  totalPages:state.totalPages,
  year:state.year,
  rating: state.rating,
  runtime: state.runtime,
  movies:state.movies,
  locale:state.locale,
  texts:state.texts
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  nextPage:()=>{
    dispatch(nextPage());
    dispatch(generateMovieListUrl());
    dispatch(fetchMovieList());
  },
  previousPage:()=>{
    dispatch(previousPage());
    dispatch(generateMovieListUrl());
    dispatch(fetchMovieList());
  }
 
});
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...propsFromState,
  ...propsFromDispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MoviesContainer);