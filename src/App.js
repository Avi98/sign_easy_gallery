import React, { Component } from 'react';
import './App.css';
import { Header } from './components';
import { Gallery, } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Gallery />
      </div>
    );
  }
}

export default App;
