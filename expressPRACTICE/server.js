const express = require('express');
const app = express();
const Beer = require('./models/beer')
const bodyParser = require('body-parser');

// setting up middleWare
// middleWare are function that happend synchronously
// in the request from client on the server
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('IT WORKS');
});

app.get('/beer/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/beer', (req, res) => {
  console.log(req.body, 'this is where our info from the fruit form will live');
  if (req.body.readyToDrink === 'on') {
    req.body.readyToDrink = true;
  } else {
    req.body.readyToDrink = false;
  }
  Beer.push(req.body);
  res.redirect('/beer');
  res.send(Beer);
});

app.get('/beer', (req, res) => {
  res.send(Beer)
});
app.get('/beer/:index', (req, res) => {
  // res.send(Beer[req.params.index])
  res.render('show.ejs', {
    beer: Beer[req.params.index]
  });
});

app.listen(3000, () => {
  console.log('serve is LIVE');
});
