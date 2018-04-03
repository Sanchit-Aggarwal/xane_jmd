import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
      </div>
    );
  }
}

export default App;
