import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import axios from 'axios';
import Profile from './components/profile/profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile/>   
      </div>
    );
  }
}

export default App;
