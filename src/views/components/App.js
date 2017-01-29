import React, { Component } from 'react';
import './App.css';
import Player from './player.js';
const remote = '';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Dart player!</h2>
        </div>
        <p className="App-intro">
          To get started, load a flac file.
        </p>
        <Player remote={remote} />
      </div>
    );
  }
}

export default App;
