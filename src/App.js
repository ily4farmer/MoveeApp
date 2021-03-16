import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Details from './components/Details/Details';
import Navigation from './components/Navigation/Navigation'
import About from './routes/About/About';
import Home from './routes/Home/Home';

export default function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Details}/>
    </HashRouter>
  )
}