import React from 'react';
import { connect } from 'react-redux';
import { fetchGenreList, genreSelected, sliderChanged, fetchMovieList, generateMovieListUrl, localeChange } from '../actions';
import Navigation from '../components/Navigation';
class NavigationContainer extends React.Component {
  componentDidMount() {
      this.props.dispatch(fetchGenreList(this.props.locale)) 
  }
  
  onGenreChange = genre => {
    this.props.onGenreChanged(genre);
  };
  onSliderChange=(slider)=>{
    this.props.onSliderChanged(slider);
  }
  clickOnSearch=()=>{
    this.props.onSearchClick();
  }
  onLocaleChanged=(newLocale)=>{
    const{locale,moviesUrl}=this.props
    this.props.onLocaleChange(locale,newLocale,moviesUrl);
  }
  
  render() {
    const { genre,genres, year, runtime, rating,texts} = this.props;
    return (
      <Navigation
      genre={genre}
        genres={genres}
        onGenreChange={this.onGenreChange}
        year={year}
        runtime={runtime}
        rating={rating}
        onSliderChange={this.onSliderChange}
        onClick={this.clickOnSearch}
        onLocaleChange={this.onLocaleChanged}
        texts={texts}
      />
    );
  }
}
const mapStateToProps = state => ({
  genres: state.genres,
  genre: state.genre,
  year: state.year,
  rating:state.rating,
  runtime:state.runtime,
  moviesUrl:state.moviesUrl,
  locale:state.locale,
  texts:state.texts,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  onGenreChanged: genre => {
    dispatch(genreSelected(genre));
  },
  onSliderChanged:slider=>{
    dispatch(sliderChanged(slider));
  },
  onSearchClick:()=>{
    dispatch( generateMovieListUrl())
   dispatch(fetchMovieList());
   
  },
  onLocaleChange:(locale,newLocale,moviesUrl)=>{
    if(locale !==newLocale.target.value ){
      dispatch(localeChange(newLocale.target.value));
      dispatch(fetchGenreList(newLocale.target.value));
      if(moviesUrl.length>0){
      dispatch( generateMovieListUrl());
      dispatch(fetchMovieList());
      
      }
    }
    
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
)(NavigationContainer);
