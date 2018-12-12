import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrimesList from './CrimesList'

// https://data.cityofchicago.org/resource/crimes.json
class App extends Component {
  constructor() {
    super();

    this.state = {
      crimes: []
    }
  }
  getCrimes = async () => {

    try {
      // By default fetch is making GET request
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json')
      // The response from API is in JSON, notice the end of crimes.JSON
      // so we have to parse that into a regular object so we cam use interval
      const crimesJson = await crimes.json();
      return crimesJson;

    } catch(err) {
      return err;
    }

  }

  componentDidMount(){

    this.getCrimes().then((crimes) => {
      console.log(crimes, 'this is data');

      this.setState({crimes: crimes});
    }).catch((err) => {
      console.log(err);
    });
    // componentDidMount, like rendar, and constructor are part of the component lifestyle
    // that means these functions get called automatically

    // componentDidMount is where you will make any get requrests, set up sockets
    // (chat rooms), set up firebase (direct db)

    // componentDidMountrepresents is when the component is actually mounted om to
    // the DOM

    // this is where we make get requests if we want our data to be loaded
    // on the page immediately
  }
  render() {

    return (
      <div className="App">
        <CrimesList crimes={this.state.crimes} />
      </div>
    );
  }
}

export default App;
