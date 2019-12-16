const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2500
const app = express()
const un = require('./creds') 
const groupRoutes = require('./routes/groupsRoutes')
const eventRoutes = require('./routes/eventsRoutes')
const commentRoutes = require('./routes/commentsRoutes')
const userRoutes = require('./routes/usersRoutes')
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

mongoose.connect(`mongodb+srv://${un.username}:${un.password}@colbyscluster-sxrmq.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

groupRoutes.routes(app)
eventRoutes.routes(app)
commentRoutes.routes(app)
userRoutes.routes(app)
// Create a new Express app

// Set up Auth0 configuration
const authConfig = {
  domain: un.domain,
  audience: 'https://api.thepregameapp.com'
};

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
    console.log(req)
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// Start the app



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
