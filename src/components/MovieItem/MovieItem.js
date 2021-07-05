import React from 'react';
import {Link} from 'react-router-dom';
import "./MovieItem.sass"

export default function MovieItem({id, title, genres, year, summary, poster}) {
    const renderIcon = () =>{
        if (genres.length > 3) {
            const re = genres.slice(0, 3)
            return (
                <ul className="movie__genres">
                    {re.map((el, index) => {
                        return <li key={index} className="movie__genres-item">{el}</li>
                    })}
                    <li className="movie__genres-item">...</li>
                </ul>
            )
        } else {
            return ( 
                <ul className="movie__genres">
                    {genres.map((el, index) => {
                        return <li key={index} className="movie__genres-item">{el}</li>
                    })}
                </ul>
            )
        }
    }
    return(
        <Link to={{
            pathname:`/movie/${id}`,
            state: {
                title, genres, year, summary, poster
            }
        }}>
            <div className="movie__item">
                <img src={poster} className="movie__img" alt={title} title={title}/> 
                <div className="movie__column">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">Год выхода: {year}</h5>
                    {renderIcon()}
                    <p className="movie__summary">Описание: <br/>{summary.slice(0, 300)}</p>
                </div>
            </div>
        </Link>
    );
}