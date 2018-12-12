import React, { Component } from 'react';
import Comment from './Comment.js'
import './App.css';


class Post extends Component {
  constructor() {
    super();
     this.state = {
       title: '',
       author: '',
       body: ''
      };
    }


    handleChangeValue = e => {
      this.setState({
      [e.target.name]: e.target.value
      });
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit();
      console.log(this.state);
    }

 render() {
    return (
      <div>
      <form onSubmit={fields => this.onSubmit({fields})}>
      <label>
        Title:
        <input name='title' type="text" value={this.state.title} onChange={e => this.handleChangeValue(e)} />
      </label>
      <br/>

       <label>
         Author:
         <input name='author' type="text" value={this.state.author} onChange={e => this.handleChangeValue(e)} />
       </label>
       <br/>

       <label>
         Body:
         <input name='body' type="text" value={this.state.body} onChange={e => this.handleChangeValue(e)} />
       </label>

       <button onClick={e => this.onSubmit(e)}>Submit</button>

        <h1>Hello {this.props.title}</h1>

     </form>

        </div>
    );
  }
  // render() {
  //
  //   console.log(this.props, '<------- This is props');
  //
  //   return (
  //     <header>
  //       <ul>
  //         <li>Title: {this.props.title}</li>
  //         <li>Author: {this.props.author}</li>
  //       </ul>
  //       <p>Body: {this.props.body}</p>
  //       <h3>Comments:</h3>
  //       // Render Comment component, passing in data
  //       <Comment body={this.props.comments[0]} />
  //     </header>
  //   );
  // }
}
export default Post;
