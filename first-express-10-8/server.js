const express = require('express');
// Create our application
const app = express();
// app is an object which has methods for
// listening and respoing to requests
// express is a function that when called
// produces an object that allows us
// to create a server
// Remeber that express is a framework that
// has an inherent architecture

// set up a get request listener
app.get('/', (request, response) => {
  response.send('This is the server reposnding to get request');
});


// keep the porn from 3000 to 9000
app.listen(3000, () =>{
  console.log('server is listening, on port 3000')
})
