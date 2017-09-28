import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">New York Times Article Scrubber</h1>
        </header>
        <p className="App-intro">
          Search for and articles of interest !
        </p>
      </div>

    );
  }
}

export default App;
