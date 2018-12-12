const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const Pets = require('../models/pets');

router.get('/', (req, res) => {
  Pets.find({}, (err, foundPets) => {
    res.render('./pets/index.ejs', {
      pets: foundPets
    });
  });
});

router.get('/new', (req, res) => {
  res.render('./pets/new.ejs');
});

router.post('/', (req, res) => {
  console.log(req.body);
  Pets.create(req.body, (err, petCreated) => {
    if (err) {
      console.log(err);
    } else {
      console.log(petCreated);
      res.redirect('/pets');
    }
  });
});







module.exports = router;
