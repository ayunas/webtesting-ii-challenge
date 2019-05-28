import React from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';


class App extends React.Component {

  state = {
    hits: 0,
    strikes: 0,
    fouls: 0,
    balls: 0,
  }

  hit = () => {
    console.log('hit triggered');
    this.setState({
      hits: this.state.hits + 1
    })


  }
  strike = () => {
    console.log('strike triggered');
    this.setState({
      strikes: this.state.strikes + 1
    })
  }

  foul = () => {
    console.log('foul triggered');
    this.setState({
      fouls: this.state.fouls + 1
    })
  }

  ball = () => {
    console.log('ball triggered');
    this.setState({
      balls: this.state.balls + 1
    })
  }

  render() {
    return (
      <>
        <Display hits={this.state.hits} strikes={this.state.strikes} fouls={this.state.fouls} balls={this.state.balls} />
        <Dashboard hit={this.hit} strike={this.strike} foul={this.foul} ball={this.ball} />
      </>
    );
  }
}

export default App;
