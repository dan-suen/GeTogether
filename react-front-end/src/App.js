import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Event from './components/main_logged/event.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Event />
      </div>
    );
  }
}

export default App;
