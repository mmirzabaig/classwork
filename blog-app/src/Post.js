import React, { Component } from 'react';

class Post extends Component {
  render() {

    console.log(this.props, '<------- This is props');

    return (
      <header>
        <ul>
          <li>Title: {this.props.title}</li>
          <li>Author: {this.props.author}</li>
        </ul>
        <p>Body: {this.props.body}</p>
        // <p> {[this.props.comments]} </p>
      </header>
    );
  }
}
export default Post;
