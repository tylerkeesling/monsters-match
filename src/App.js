import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Monsters from './components/Monsters'

const baseURL = 'https://arcane-castle-78646.herokuapp.com'
// const baseURL = 'http://localhost:8080'

class App extends Component {
  state = {
    monsters: []
  }
  async componentDidMount() {
    const response = await fetch(`${baseURL}/api/v1/monsters`)
    const json = await response.json()
    this.setState({ monsters: json.monsters })
  }
  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <Monsters monsters={ this.state.monsters } />
          </div>
      </div>
    )
  }
}

export default App;
