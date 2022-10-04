import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import axios from 'axios';
import Main from './components/main/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main></Main>     
      </div>
    );
  }
}

export default App;
