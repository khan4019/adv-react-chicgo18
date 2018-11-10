import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Feed}></Route>
            <Route path="/feed" component={Feed}></Route>
            <Route path="/cart" component={Cart}></Route>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
