
import React from "react";
import LoadingMovie from "./LoadingMovie";

import { Link } from "react-router-dom";
import "./Movie.css";
class Movie extends React.Component {


  render() {
    const {
      title,
      backdrop_path,
      release_date,
     
      overview,
      vote_average,
      runtime
    } = this.props.movie;
    const year = release_date ? release_date.substring(0, 4) : null;
   const{isLoading}=this.props;
    const backgroundStyle = {
      backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${backdrop_path})`
    }
    const{texts}=this.props
    return (
    <div>
      {isLoading?<LoadingMovie message={texts.loadingMovie}/>:
    <div className="movie-page"> 
    
    <div>
          <div className="movie-image" style={backgroundStyle} >
           
          </div>
          <div className="movie-details">
            <h1>
              {title}
              <span>({year})</span>
            </h1>
            <section className="genres">
            {(this.props.movie["genres"])
            ? this.props.movie["genres"].map((genre,index)=>(
              <div key={genre.id}>
                <span>{genre.name}</span>
                {index < this.props.movie["genres"].length - 1 && (
                  <span className="separator">|</span>
                )}
              </div>
            )):null}
            </section>
            <h5>
              {texts.rating}
              <span>{vote_average}</span>
            </h5>
            <h5>
             {texts.runtime}
              <span>{`${runtime} min`}</span>
            </h5>
            <h4>{texts.description}</h4>
            <p>{overview}</p>
           
  <div className="back-button">   
  <Link to="/">       
  <button>
   {texts.back}
  </button>
  </Link>
  </div>
 
  </div>      
  </div>
 </div> }
    </div>
     
                
    )

  }
}

export default Movie;