const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2500
const app = express()
const un = require('./creds') 

mongoose.connect(`mongodb+srv://${un.username}:${un.password}@colbyscluster-sxrmq.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

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

const postGroup = async (req, res) => {
    try{
        var GroupInstance = new GroupsModel(req.body)
        const created = await GroupsModel.create(GroupInstance)
        res.send(created)
    }catch(err){
        res.status(500).send(err)
    }
}

const getGroups = async (req, res) => {
    try{
        var GroupInstance = await GroupsModel.find({})
        res.send(GroupInstance)
    }catch(err){
        res.status(500).send(err)
    }
}

app.route('/groups')
.get(getGroups)
.post(postGroup)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
