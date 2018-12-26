import React from 'react';
import './Movies.css';
import MovieListItem from './MovieListItem';

const Movies = ({ movies, page, totalPages,nextPage,previousPage ,texts}) => (
  
    movies.length > 0 ? (
      <section>
      <div>
        <ul className="movies">
          {movies.map(movie => (
            <MovieListItem key={movie.id} movie={movie} yearLabel={texts.year} ratingLabel={texts.rating} />
          ))}
        </ul>
        <div className="pagination">
        <div className="navigation-button">
            <button onClick={previousPage} disabled={page <= 1 }>{texts.previous}</button>
            </div>

          <span>{`${texts.page} ${page} ${texts.of} ${totalPages}`}</span>
         
            <div className="navigation-button">
            <button onClick={nextPage}disabled={page >= totalPages }>{texts.previous}</button>
            </div>
          
        </div>
      </div>
      </section>
    ) : (
      <div className="welcome">
      <p>{texts.welcome}</p>
      </div>
    )
 
);

export default Movies;
