import React from 'react';
import './Selection.css';
import Dropdown from 'react-dropdown';

const Selection = ({ genre, genres, onGenreChange, label,placeholder}) => (
  <div className="selection">
    <label>{label}</label>

    <Dropdown
      options={genres.map(genre => ({
        label: genre.name,
        value: genre.id,
        className: 'select-genre'
        
      }))}
      placeholder={genre.label?genre.label:placeholder}
      onChange={onGenreChange}
    />
    
  </div>
);

export default Selection;
