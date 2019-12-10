const groupsRouteFunctions = require('../controllers/groupsController')

const routes = (app) =>{
    app.route('/groups')
    .get(groupsRouteFunctions.getGroups)
    .post(groupsRouteFunctions.postGroup)

    app.route('/group/:id')
    .put(groupsRouteFunctions.putGroup)
    .get(groupsRouteFunctions.getGroup)
    .delete(groupsRouteFunctions.deleteGroup)
}


module.exports = {routes}