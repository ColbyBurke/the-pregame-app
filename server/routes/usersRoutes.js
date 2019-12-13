const usersRouteFunctions = require('../controllers/usersController')

const routes = (app) =>{
    app.route('/users')
    .get(usersRouteFunctions.getUsers)
    .post(usersRouteFunctions.postUser)

    app.route('/user/:id')
    .put(usersRouteFunctions.putUser)
    .get(usersRouteFunctions.getUser)
    .delete(usersRouteFunctions.deleteUser)
}


module.exports = {routes}