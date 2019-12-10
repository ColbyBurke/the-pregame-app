const commentsRouteFunctions = require('../controllers/commentsController')

const routes = (app) =>{
    app.route('/comments')
    .get(commentsRouteFunctions.getComments)
    .post(commentsRouteFunctions.postComment)

    app.route('/comment/:id')
    .put(commentsRouteFunctions.putComment)
    .get(commentsRouteFunctions.getComment)
    .delete(commentsRouteFunctions.deleteComment)
}


module.exports = {routes}