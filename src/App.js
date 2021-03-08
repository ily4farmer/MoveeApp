import React, { Component } from 'react';
import Movies from "./components/Movies/Movies";
import axios from "axios";
import "./App.css";


export default class App extends Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({
      movies: movies,
      isLoading: false
    })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;

    return (
      <section className="container">
          {isLoading ? 
          <div className="loader">
            <span>Загрузка...</span>
          </div>
          : <Movies movies={movies}/>
          }
      </section>
    );
  }
}

