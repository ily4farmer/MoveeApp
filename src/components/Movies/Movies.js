import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

export default function Movies({movies, leng, showItem, display}) {
    console.log(display);
    let movieBtn = 'movie__btn';
    if (display == "none") {
        movieBtn += ' none';
    }
    return(
        <div className="movie">
            <div className="movie-block">
                {movies.slice(0, leng).map(el => {
                return(
                    <MovieItem 
                    key={el.id} 
                    id={el.id} 
                    title={el.title} 
                    genres={el.genres}
                    year={el.year} 
                    summary={el.summary} 
                    poster={el.medium_cover_image}
                    />
                )
                })}
            </div>
            <div className="movie__footer">
                <a href="#" className={movieBtn} onClick={showItem}>Показать полностью</a>
            </div>
        </div>
    );
}