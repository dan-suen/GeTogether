import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Button from './components/main_logged/filter_button.js';
import axios from 'axios';
import Main from './components/main/Main';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />      
      </div>
    );
  }
}

export default App;
