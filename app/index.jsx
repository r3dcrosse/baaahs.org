import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components //////////////////////////////////////////////////////////////////
import Nav from './components/Nav.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <p>BAAAHS!!!!!</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
