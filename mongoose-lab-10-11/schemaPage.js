const mongoose = require('mongoose');

const schemaBiz = mongoose.Schema({
  name: {type: String, required: true},
  founded: String,
  employees: Number,
  active: Boolean,
  products: [String],
  ceo: {
    name: String,
    age: Number
  }
});



const Company = mongoose.model('Company', schemaBiz);
module.exports = Company;
