const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    }
})

const CommentsModel = mongoose.model('comment', CommentsSchema)

module.exports = CommentsModel