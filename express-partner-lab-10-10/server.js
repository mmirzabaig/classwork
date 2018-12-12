const express = require('express');
const app = express();
const Animals = require('./models/animals')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
// app.get('/', (req, res) {
//   res.send('hello');
// });

app.get('/animals', (req, res) => {
  res.render('index.ejs', {
    animals : Animals
  });
});

app.get('/animals/:index', (req, res) => {
  res.render('show.ejs', {
    animals : Animals[req.params.index]
  })
});

app.delete('/animals/:index', (req, res) => {
  console.log(req.params.index, ' index in the delete route');
  Animals.splice(req.params.index, 1);
  res.redirect('/animals')
});

app.get('/animals/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    animals : Animals[req.params.index],
    index : req.params.index
  });
});

app.put('/animals/:index', (req, res) => {
  Animals[req.params.index] = req.body;
  res.redirect('/animals');
});




app.listen(3000, () => {
  console.log('your app is LIVE');
});
