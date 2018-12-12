import React, { Component } from 'react';



class PuppyList extends Component {
  render(){
    return(
      <div>
        <h1>DOG NAME {this.props.name}</h1>
        <h1>DOG AGE {this.props.age}</h1>
        <h1>DOG BREED {this.props.breed}</h1>
      </div>
    );
  }
}

export default PuppyList
