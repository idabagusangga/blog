const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let articleSchema = new Schema({
    content     : String,
    userId      :[{
        type    : Schema.Types.ObjectId,
        ref     : 'UserTest'
    }]
})

const Article = mongoose.model('ArticleTest',articleSchema)

module.exports = Article;