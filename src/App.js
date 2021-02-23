import React, { Component } from 'react';
import Apply from "./components/Apply";


export default class App extends Component {

  constructor(props) {
    super(props)
    console.log("Конструктор");
  }

  state = {
    count: 0
  }

  plus = () => {
    let current = this.state.count;
    current++;
    this.setState({
      count: current
    });
  }

  minus = () => {
    let current = this.state.count;
    current--;
    if (current <= 0) {
      current = 0;
    }
    this.setState({
      count: current
    });
  }

  componentDidMount() {
    console.log('Компонент был смонтирован');
  }

  componentDidUpdate() {
    console.log('Компонент был изменен');
  }

  componentWillUnmount() {
    console.log('Компонент был удален');
  }

  render() {
    console.log("Я рендерюсь");
    const {count} = this.state;
    const {plus, minus} = this;
    return(
      <div>
        <h1>Текущее число: {count}</h1>
        <button onClick={minus}>Минус</button>
        <button onClick={plus}>Плюс</button>

      </div>
    )
  }
}

