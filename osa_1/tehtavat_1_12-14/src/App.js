import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      votes: { ...props.votes },
      max: 0
    }
  }

  handleClick = () => {
    const random = Math.floor((Math.random() * 6));
    this.setState({
      selected: random
    });
  }

  handleVote = () => {
    const copy = this.state.votes;
    copy[this.state.selected] += 1;
    if (copy[this.state.selected] > copy[this.state.max]) {
      this.setState({
        votes: copy,
        max: this.state.selected
      });
    } else {
      this.setState({
        votes: copy
      });
    }
  }

  render() {

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br />
        has {this.state.votes[this.state.selected]} votes
        <br />
        <button onClick={this.handleVote}>vote</button>
        <button onClick={this.handleClick}>next anecdote</button>
        <h2>anecdote with the most votes:</h2>
        {this.props.anecdotes[this.state.max]}
        <br />
        has {this.state.votes[this.state.max]} votes
      </div>
    );
  }
}

export default App;