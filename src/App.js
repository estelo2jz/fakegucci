import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Purses from './components/Purses';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/purses" component={Purses} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
