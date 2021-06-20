const mongoose = require('mongoose')
const articleSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
})

const Article = mongoose.model('Article', articleSchema)

module.exports = {
    Article
}