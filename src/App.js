import React, { Component } from 'react';
import './App.css';
import { Header, Layout } from './components';
import { Gallery, NavigationSection } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout>
          <NavigationSection />
          <Gallery />
        </Layout>
      </div>
    );
  }
}

export default App;
