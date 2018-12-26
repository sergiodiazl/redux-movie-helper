import React from 'react';
import './Navigation.css';
import './Button.css'
import Selection from './Selection';
import Slider from './Slider';

class Navigation extends React.Component {
  render() {
    const {
      onGenreChange,
      genre,
      genres,
      year,
      rating,
      runtime,
      texts,
      onSliderChange,
      onLocaleChange,
      onClick
    } = this.props;

    
    return (
      <div className="navigation">
        <div className="navigation-options">
          <Selection
            genres={genres}
            genre={genre}
            onGenreChange={onGenreChange}
            label={texts.genre}
            placeholder={texts.genrePlaceholder}
          />
          <Slider data={year} label={texts.year} onSliderChange={onSliderChange} />
          <Slider data={rating} label={texts.rating} onSliderChange={onSliderChange} />
          <Slider data={runtime}  label={texts.runtime}onSliderChange={onSliderChange} />
          <div className="search-button">
          <button  onClick={onClick}>{texts.search}</button>
          </div>

          <div className ="locale-options">

      
<div className="locale-button">
  <button  onClick={onLocaleChange} value="en">English</button>
  </div>
  <div className="locale-button">
  <button  onClick={ onLocaleChange} value="es">Español</button>
  </div>
  <div className="locale-button">
  <button  onClick={ onLocaleChange}value="ru">Русский</button>
  </div>
  </div>
        </div>
        
      
      </div>
    );
  }
}
export default Navigation;
