import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header.js';
import Details from './components/Details.js';
import List from './components/List.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Search from './components/Search.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path = "/" component={Search} />
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
