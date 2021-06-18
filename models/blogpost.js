const mongoose = require('mongoose')
const dayjs = require('dayjs')

const Schema = mongoose.Schema;

const blogpostSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    mainBody: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }, 
})


const BlogPost = mongoose.model('BlogPost', blogpostSchema)

module.exports = BlogPost;