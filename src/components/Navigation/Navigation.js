import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css"

export default function Navigation() {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="header__link">Главная</Link>
                    <Link to="/about" className="header__link">О проекте</Link>
                </div>
            </div>
        </header>
    )
}