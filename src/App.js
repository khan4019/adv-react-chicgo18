import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware  from 'redux-saga';

import Header from './components/Header';
import Feed from './components/Feed';
import Cart from './components/Cart';
import './App.css';
import rootReducer from './reducers/';
import FeedContainer from './containers/FeedContainer';
import HeaderContainer from './containers/HeaderContainer';
import rootSaga from './sagas/productSagas';
import CartContainer from './containers/CartContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore( 
  rootReducer, 
  applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <HeaderContainer></HeaderContainer>
              <Route exact path="/" component={FeedContainer}></Route>
              <Route path="/feed" component={FeedContainer}></Route>
              <Route path="/cart" component={CartContainer}></Route>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
