import React, { Component } from 'react';
// this synxtax right here ^ is called destructering
import logo from './logo.svg';
import './App.css';

// importing the Component we just created
import Hello from './Hello';
import Services from './Services';
// The stuff we are reuturning is call JSX.
// JSX is a templating lagnuage used in react

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <Hello />
      <Services />
      <h1 > Hello World </h1>
      </div>
      // <
      // header className = "App-header" >
      // <
      // img src = {
      //   logo
      // }
      // className = "App-logo"
      // alt = "logo" / >
      // <
      // p >
      // Edit < code > src / App.js < /code> and save to reload. <
      // /p> <
      // a className = "App-link"
      // href = "https://reactjs.org"
      // target = "_blank"
      // rel = "noopener noreferrer" >
      // Learn React <
      // /a> <
      // /header> <
      // /div>
    );
  }
}

export default App;
