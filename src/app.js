import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = e => {
    this.setState( {count: this.state.count + 1} )
  };

  handleDecrement = e => {
    this.setState( {count: this.state.count - 1} )
  };
  
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment Count</button>
        <button onClick={this.handleDecrement}>Decrement Count</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
