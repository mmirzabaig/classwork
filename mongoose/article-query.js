// we don't have to save this to a variable, because we are
// not doing anything with it
// this file will just run, and connect to the MongoDB for us
require('./db')
//requiring our model
const Article = require('./article')
//makes a request to create something in mongodb
Article.create({title: 'Old man in the sea', author: 'hems'}, (err, createdArticle) => {
    if(err){
        console.log(err)
    } else {
        console.log(createdArticle);
    }
})
