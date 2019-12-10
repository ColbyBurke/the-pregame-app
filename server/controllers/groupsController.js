const GroupsModel = require('../models/groupsModel')

const postGroup = async (req, res) => {
    try{
        console.log('post groups');
        
        var GroupInstance = new GroupsModel(req.body)
        const created = await GroupsModel.create(GroupInstance)
        res.send(created)
    }catch(err){
        res.status(500).send(err)
    }
}

const getGroups = async (req, res) => {
    try{
        console.log('inside get');
        
        var GroupInstance = await GroupsModel.find({})
        console.log('after find in get');
        
        res.send(GroupInstance)
    }catch(err){
        res.status(500).send(err)
    }
}

const putGroup = async (request, response) => {
    try{
        var GroupInstance = await GroupsModel.findOneAndUpdate({"_id":request.params.id}, request.body, {useFindAndModify: false})
        console.log(GroupInstance);
        response.send(GroupInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

const getGroup = async (request, response) => {
    try{
        const GroupInstance = await GroupsModel.find({"_id": request.params.id})
        response.send(GroupInstance)
    }catch(err){
        response.status(500).send(err)
    }
}

const deleteGroup = async (request, response) => {
    try{
        const GroupInstance = await GroupsModel.deleteOne({"_id": request.params.id})
        response.send(GroupInstance)
    }catch(err){
        response.status(500).send(err)
    }
}


module.exports = {getGroups, postGroup, putGroup, getGroup, deleteGroup}