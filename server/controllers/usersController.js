const UsersModel = require('../models/usersModel')

const postUser = async (req, res) => {
    try{
        console.log('post Users');
        
        var UserInstance = new UsersModel(req.body)
        const created = await UsersModel.create(UserInstance)
        res.send(created)
    }catch(err){
        res.status(500).send(err)
    }
}

const getUsers = async (req, res) => {
    try{
        console.log('inside get');
        
        var UserInstance = await UsersModel.find({})
        console.log('after find in get');
        
        res.send(UserInstance)
    }catch(err){
        res.status(500).send(err)
    }
}

const putUser = async (request, response) => {
    try{
        var UserInstance = await UsersModel.findOneAndUpdate({"_id":request.params.id}, request.body, {useFindAndModify: false})
        console.log(UserInstance);
        response.send(UserInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

const getUser = async (request, response) => {
    try{
        const UserInstance = await UsersModel.find({"_id": request.params.id})
        response.send(UserInstance)
    }catch(err){
        response.status(500).send(err)
    }
}

const deleteUser = async (request, response) => {
    try{
        const UserInstance = await UsersModel.deleteOne({"_id": request.params.id})
        response.send(UserInstance)
    }catch(err){
        response.status(500).send(err)
    }
}


module.exports = {getUsers, postUser, putUser, getUser, deleteUser}