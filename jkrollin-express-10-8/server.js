const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

const jkrollin = ['Mariana', 'Jawad', 'Alex', 'Julien', 'Christine', 'Stephen', 'Mirza', 'Ben', 'Shahzad'];

app.get('/jkrollin/', (req, res) => {
  res.send(jkrollin);
});
app.get('/jkrollin/:index', (req, res) => {
  console.log(req.params);
  res.send(jkrollin[req.params.index]);
});


app.listen(3000, () => {
  console.log('This app is LIVE');
})
