const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    groups:{
        type: Array,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        required: true
    }
})

const UsersModel = mongoose.model('user', UsersSchema)

module.exports = UsersModel