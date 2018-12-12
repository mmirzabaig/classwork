const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  body: String,
  comments: [{body: String, commendDate: Date}],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

// First argument, is what we are naming our collection,
// mongodb i believe will lowercase and plurelize
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
