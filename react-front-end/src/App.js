import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Calendar from './components/main_logged/calender.js';
import axios from 'axios';
import Main from './components/main/Main';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />      
      </div>
    );
  }
}

export default App;
