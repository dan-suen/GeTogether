import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Button from 'react-bootstrap/Button';
import NavBar from  './components/top_nav/top_nav';
import Footer from "./components/footer/footer";
import Register from "./components/register";
import axios from 'axios';
import Profile from './components/profile/profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>Random Text Random Text</h1>
        <Button variant="danger" onClick={this.fetchData}>
          Fetch Data
        </Button>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <h1>Random Text Random Text</h1>
        <Register></Register>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
