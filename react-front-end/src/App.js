import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import axios from 'axios';
//import Main from './components/main/Main';
//import EventPage from 'components/event/EventPage';
import User from 'components/user/User';


class App extends Component {
  render() {
    return (
      <div className="App">
        <User></User>
      </div>
    );
  }
}

export default App;
