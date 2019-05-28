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
      hits: this.state.hits + 1,
      balls: 0,
      strikes: 0,
      fouls: 0
    })


  }
  strike = () => {
    console.log('strike triggered');
    if (this.state.strikes === 3) {
      this.setState({
        strikes: 0
      })
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  foul = () => {
    console.log('foul triggered');

    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      })
    } else {
      this.setState({
        fouls: this.state.fouls + 1
      })
    }
  }

  ball = () => {
    console.log('ball triggered');

    if (this.state.balls === 4) {
      this.setState({
        balls: 0
      })
    } else {
      this.setState({
        balls: this.state.balls + 1
      })
    }
  }

  reset = () => {
    console.log('reset triggered');

    this.setState({
      hits: 0,
      strikes: 0,
      fouls: 0,
      balls: 0,
    })
  }

  render() {
    return (
      <>
        <Display hits={this.state.hits} strikes={this.state.strikes} fouls={this.state.fouls} balls={this.state.balls} />
        <Dashboard hit={this.hit} strike={this.strike} foul={this.foul} ball={this.ball} reset={this.reset} />
      </>
    );
  }
}

export default App;
