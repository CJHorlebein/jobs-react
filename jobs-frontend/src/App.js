import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header.js';
import Details from './components/Details.js';
import List from './components/List.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/list/:ref?" component={List} />
          <Route path="/details/:id" component={Details} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
