import React, { Component } from 'react';
import "./Details.css"

export default class Details extends Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
       
    }

    render() {
        const {location, history} = this.props;
        console.log(location.state);
        if (location.state) {
            return (
                <div className="details">
                    <div className="container">
                        <div className="details-block">
                            <img src={location.state.poster} className="details__img" alt={location.state.title} title={location.state.title}/>
                            <div className="details__text">
                                <h1 className="details__title">{location.state.title}</h1>
                                <h2 className="details__year">Год выхода: {location.state.year}</h2>
                                <ul className="details__genres">
                                    {location.state.genres.map((el, index) => {
                                        return <li key={index} className="details__genres-item">-{el}</li>
                                    })}
                                </ul>
                            </div>
                            <p className="details__summary">Описание:<br/>{location.state.summary}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}