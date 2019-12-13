const CommentsModel = require('../models/commentsModel')

const postComment = async (req, res) => {
    try{
        console.log('post Comments');
        
        var CommentInstance = new CommentsModel(req.body)
        const created = await CommentsModel.create(CommentInstance)
        res.send(created)
    }catch(err){
        res.status(500).send(err)
    }
}

const getComments = async (req, res) => {
    try{
        console.log('inside get');
        
        var CommentInstance = await CommentsModel.find({})
        console.log('after find in get');
        
        res.send(CommentInstance)
    }catch(err){
        res.status(500).send(err)
    }
}

const putComment = async (request, response) => {
    try{
        var CommentInstance = await CommentsModel.findOneAndUpdate({"_id":request.params.id}, request.body, {useFindAndModify: false})
        console.log(CommentInstance);
        response.send(CommentInstance)
    }catch(error){
        response.status(500).send(error)
    }
}

const getComment = async (request, response) => {
    try{
        const CommentInstance = await CommentsModel.find({"_id": request.params.id})
        response.send(CommentInstance)
    }catch(err){
        response.status(500).send(err)
    }
}

const deleteComment = async (request, response) => {
    try{
        const CommentInstance = await CommentsModel.deleteOne({"_id": request.params.id})
        response.send(CommentInstance)
    }catch(err){
        response.status(500).send(err)
    }
}


module.exports = {getComments, postComment, putComment, getComment, deleteComment}