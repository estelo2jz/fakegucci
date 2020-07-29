import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
