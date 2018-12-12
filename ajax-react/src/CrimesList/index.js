import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react';

class CrimesList extends Component {

  deleteCrime = () => {
    console.log(crimesList);
  }
  render() {
    const crimesList = this.props.crimes.map((crime, i) => {
      return (
        <li key={i}>
        Key: {i} <br/>
        Description: {crime.description} <br/>
        Date: {crime.data} <br/>
        <button onClick={this.deleteCrime.i}>Delete</button>
        </li>
      )
    });
    return (
     <div>
      <h2>Hello</h2>
      <ul>
        {crimesList}
      </ul>
     </div>
    // const Crimes = this.props.crimes.map((crime, i) => {
    //   return <Segment key={i}><List.Item >crime</List.Item></Segment>
    // });
    );
  }
}

export default CrimesList;
