const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db')

const petController = require('./controllers/pC')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/pets', petController);


app.get('/', (req, res) => {
  res.render('index.ejs');
})


app.listen(3000, () => {
  console.log('Your app is LIVE!');
})
