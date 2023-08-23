const UserController = require('./controllers/UserController')
const Que1 = require('./controllers/Que1')
const Que2 = require('./controllers/Que2')

module.exports = (app) =>{
    //get all user
    app.get('/users', UserController.index),

    //create
    app.post('/user', UserController.create),

    //edit
    app.put('/user/:userId', UserController.put),

    //delete
    app.delete('/user/:userId', UserController.delete),
    
    //show by id
    app.get('/user/:userId', UserController.show),

    //qe1 (4)
    app.post('/que1', Que1.que1)

    //qe1 (3)
    app.post('/que2', Que2.que2)

}