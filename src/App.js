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
import HeaderContainer from './containers/HeaderContainer';

const store = createStore(cartReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <HeaderContainer></HeaderContainer>
              <div>Feed</div>
              <div>
                this is footer
              </div>
            </div>
          </Router>
          
        </div>
      </Provider>
    );
  }
}

export default App;
