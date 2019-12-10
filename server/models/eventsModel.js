const mongoose = require('mongoose')

const EventsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: false
    },
    comments:{
        type:Array,
        required: false
    },
    images:{
        type: Array,
        required: false
    },
    group:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    RSVPYES:{
        type: Array,
        required: false
    },
    RSVPNO:{
        type: Array,
        required: false
    }
})

const EventsModel = mongoose.model('event', EventsSchema)

module.exports = EventsModel