import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Button from 'react-bootstrap/Button';
import NavBar from  './components/top_nav/top_nav'
import axios from 'axios';
import Main from './components/main/Main';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>{ this.state.message }</h1>
        <Button variant="danger" onClick={this.fetchData}>
          Fetch Data
        </Button>
        <Main></Main>     
      </div>
    );
  }
}

export default App;
