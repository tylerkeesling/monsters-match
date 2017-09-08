import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

// const baseURL = 'https://arcane-castle-78646.herokuapp.com'
const baseURL = 'http://localhost:8080'

class App extends Component {
  state = {
    monsters: []
  }
  async ComponentDidMount() {
    const response = await fetch(`${baseURL}/api/v1/monsters`)
    console.log(response);
  }
  render() {
    return (
      <Header />
    )
  }
}

export default App;
