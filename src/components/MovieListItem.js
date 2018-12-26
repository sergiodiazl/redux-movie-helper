import React from "react";
import "./MovieListItem.css";
import { Link } from "react-router-dom";

import WOW from "wowjs";

class MovieListItem  extends React.Component{
	componentDidMount(){
		const wow = new WOW.WOW();
    wow.init();
	}

render(){
	const {id, title, poster_path, release_date, vote_average ,} =this.props.movie;
	const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
	const year = release_date.substring(0, 4);
	const yearLabel=this.props.yearLabel;
	const ratingLabel=this.props.ratingLabel;
	return (
		
    <li className="movie-item wow bounceIn " >
		  <Link to={`/movies/${id}`} className="thumbnail">
      <img src={imgUrl} alt={title}/>
      <div className="movie-description">
			<h2>{title}</h2>
			<section className="movie-details">
				<div className="movie-year">
					<span className="title">{yearLabel}</span>
					<span>{year}</span>
				</div>
				<div className="movie-rating">
					<span className="title">{ratingLabel}</span>
					<span>{vote_average}</span>
				</div>
			</section>
		</div>
		</Link>
    </li> )
}
}


export default MovieListItem;