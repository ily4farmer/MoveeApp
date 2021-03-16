import React, { Component } from 'react';
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import "./Home.css";


export default class Home extends Component {

  state = {
    isLoading: true,
    movies: [], 
    leng: 4,
    display: "block"
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({
      movies: movies,
      isLoading: false,
    })
  }

  componentDidMount() {
    this.getMovies();
  }

  showItem = (e) => {
    e.preventDefault();
    console.log(this.state.leng);
    console.log(this.state.movies.length);
    if (this.state.leng >= this.state.movies.length-2) {
      this.setState({
        leng: this.state.movies.length,
        display: "none"
      })
    } else {
      this.setState({
        leng: this.state.leng + 2
      })
    }
  }
  render() {
    const {isLoading, movies, leng, display} = this.state;

    return (
      <section className="container">
          {isLoading ? 
          <div className="loader">
            <span>Загрузка...</span>
          </div>
          : <Movies movies={movies} leng={leng} showItem={this.showItem} display={display}/>
          } 
      </section>
    );
  }
}
