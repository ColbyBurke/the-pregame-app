const mongoose = require('mongoose')

const GroupsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    members:{
        type: Array,
        required: false
    },
    rating:{
        type: Array,
        required: false
    },
    comments:{
        type:Array,
        required: false
    },
    events:{
        type: Array,
        required: false
    },
    groupLeader:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: false
    } 
})

const GroupsModel = mongoose.model('group', GroupsSchema)

module.exports = GroupsModel