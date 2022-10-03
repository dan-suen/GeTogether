import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Logged from './components/main_logged/main-logged.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logged />
      </div>
    );
  }
}

export default App;
