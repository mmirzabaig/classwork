import React, { Component } from 'react';
import PuppyList from '../PuppyList';
class MainContainer extends Component {
  constructor(){
    super();
    // super calls the Component class's constructor,
    // which allows us to use 'this'

    this.state = {
      name: '',
      age: '',
      breed: '',
    }
  }
  handleInput = (e) => {
    console.log(e.currentTarget.name, ' < --e.currentTarget.name', e.currentTarget.value, ' < --e.currentTarget.value');
    // arrow functions automatically bind this, which means we can use this
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }
  handleSubmit = (e) => {
    // To stop the page from refreshing
    // We don't want to refresh cuz were making a SPA, (single page application)
    e.preventDefault();
    // this is the messanger function from the app component
    // that will allow us to LIFT UP STATE to the parent component
  }
  render(){
    return(
      <div>
        <h1> Hello {this.props.username}</h1>
        <form className='dogForm' onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleInput} value={this.state.name} placeholder="name" /> <br/>
          <input type="text" name="age" onChange={this.handleInput} value={this.state.age} placeholder="age" /> <br/>
          <input type="text" name="breed" onChange={this.handleInput} value={this.state.breed} placeholder="breed" /> <br/>
          <input type="submit" value='Submit' />
        </form>
        <PuppyList name={this.state.name} age={this.state.age} breed={this.state.breed} />
      </div>
    );
  }
}

export default MainContainer
