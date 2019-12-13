const EventsModel = require('../models/EventsModel')

const postEvent = async (req, res) => {
    try{
        console.log('post Events');
        
        var EventInstance = new EventsModel(req.body)
        const created = await EventsModel.create(EventInstance)
        res.send(created)
    }catch(err){
        res.status(500).send(err)
    }
}

const getEvents = async (req, res) => {
    try{
        console.log('inside get');
        
        var EventInstance = await EventsModel.find({})
        console.log('after find in get');
        
        res.send(EventInstance)
    }catch(err){
        res.status(500).send(err)
    }
}

const putEvent = async (request, response) => {
    try{
        var EventInstance = await EventsModel.findOneAndUpdate({"_id":request.params.id}, request.body, {useFindAndModify: false})
        console.log(EventInstance);
        response.send(EventInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

const getEvent = async (request, response) => {
    try{
        const EventInstance = await EventsModel.find({"_id": request.params.id})
        response.send(EventInstance)
    }catch(err){
        response.status(500).send(err)
    }
}

const deleteEvent = async (request, response) => {
    try{
        const EventInstance = await EventsModel.deleteOne({"_id": request.params.id})
        response.send(EventInstance)
    }catch(err){
        response.status(500).send(err)
    }
}


module.exports = {getEvents, postEvent, putEvent, getEvent, deleteEvent}