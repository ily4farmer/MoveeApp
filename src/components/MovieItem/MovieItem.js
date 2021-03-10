import React from 'react';
import "./MovieItem.css"

export default function MovieItem({id, title, genres, year, summary, poster}) {
    console.log(genres);
    return(
        <div className="movie__item">
            <img src={poster} className="movie__img" alt={title} title={title}/> 
            <div className="movie__column">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">Год выхода: {year}</h5>
                <ul className="movie__genres">
                    {genres.map((el, index) => {
                        return <li key={index} className="movie__genres-item">{el},</li>
                    })}
                </ul>
                <p className="movie__summary">Описание: <br/>{summary.slice(0, 150)}...</p>
            </div>
        </div>
        
    );
}