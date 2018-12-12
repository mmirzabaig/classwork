import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Hello';
import './App.css';

class App extends Component {
  constructor(){
    // The contructor allows us to intialize the state of our component,
    // the initial value of our component is our app

    // intializes the Component (the thing we are inheriting from) constructor,
    // which allows use to use this inside the constructor
    // that is what super() is doing
    super();

    this.state = {
      name: 'Cassandra',
      age: 84,
      count: 0
    }
  }
  handleClick = (e) => {
    // arrow functions automatically bind this for us, which mean
    // we can use this inside of this function this instead doing
    // comment out code in the contructor

    this.setState({
      count: this.state.count + 1
    });


// this.setState merges tje pbkect ypu [ass omtp ot. with the current state,
// in the component that you are inside of, inour case the App Component
// after this.setState is called tje app resrender with the updates state,
// so basically the render 

  }
  render() {
    return (
      <div className="App">
        <Header name={this.state.name} age={this.state.age}/>
        <p>The Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Count {this.state.name}</button>
      </div>
    );
  }
}

export default App;
