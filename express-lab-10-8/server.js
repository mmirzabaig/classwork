const express = require('express');

const app = express();

// const greeting = ['Julian', 'Alex', 'Mariana', 'Jawad']
//
// app.get('/greeting/:halo', (req, res) => {
//     console.log(req.params)
//     res.send(req.params.halo + ' ...Welcome to Thunderdome ')
//     console.log(greeting);
// })

app.get('/tip/:total/:tipP', (req, res) => {
  console.log(req.params);
  res.send(req.params.total * req.params.tipP);
});




app.listen(3000, () => {
  console.log('Your app is LIVE');
})
