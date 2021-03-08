import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

export default function Movies({movies}) {
    console.log(movies);
    return(

        <div className="movie">
            {movies.map(el => {
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
    );
}