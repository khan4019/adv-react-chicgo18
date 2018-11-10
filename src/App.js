import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Header from './components/Header';
import Feed from './components/Feed';
import Cart from './components/Cart';
import './App.css';
import cartReducer from './reducers/cartReducers';
import FeedContainer from './containers/FeedContainer';

const store = createStore(cartReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={FeedContainer}></Route>
              <Route path="/feed" component={FeedContainer}></Route>
              <Route path="/cart" component={Cart}></Route>
            </div>
          </Router>
          
        </div>
      </Provider>
    );
  }
}

export default App;
