import React, { Component } from 'react';

class Header extends Component {
  render() {

    console.log(this.props, '<------- This is props');

    return (
      <header>
        <ul>
          <li><a href='/login'>Login</a></li>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
        </ul>
      </header>
    );
  }
}

export default Header;
