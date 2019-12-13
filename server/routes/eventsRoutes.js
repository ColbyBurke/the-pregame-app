const eventsRouteFunctions = require('../controllers/eventsController')

const routes = (app) =>{
    app.route('/events')
    .get(eventsRouteFunctions.getEvents)
    .post(eventsRouteFunctions.postEvent)

    app.route('/event/:id')
    .put(eventsRouteFunctions.putEvent)
    .get(eventsRouteFunctions.getEvent)
    .delete(eventsRouteFunctions.deleteEvent)
}


module.exports = {routes}