const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2500
const app = express()
const un = require('./creds') 
const groupRoutes = require('./routes/groupsRoutes')

mongoose.connect(`mongodb+srv://${un.username}:${un.password}@colbyscluster-sxrmq.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

groupRoutes.routes(app)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
