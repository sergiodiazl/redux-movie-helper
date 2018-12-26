import React from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';
class MovieContainer extends React.Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.dispatch(fetchMovie(movieId, this.props.locale));
  }

  render() {
    const { movie, loadingMovie, texts } = this.props;
    return (
      <div>
        <Movie movie={movie} isLoading={loadingMovie} texts={texts} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  locale: state.locale,
  movie: state.movie,
  loadingMovie: state.loadingMovie,
  texts: state.texts
});
const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...propsFromState,
  ...propsFromDispatch,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MovieContainer);
