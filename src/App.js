import React from 'react';
import Header from './components/Header';
import Main from './containers/Main';
import MovieContainer from'./containers/MovieContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import './App.css';
import './serviceWorker.js'
import { BrowserRouter, Switch, Route } from "react-router-dom"
const App = () => {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/movies/:movieId" component={MovieContainer} />
          <Route component={NotFoundContainer} />}
        </ Switch>
      </div>
    </BrowserRouter>
  )
}


export default App;
