const router = require('express').Router()
const userController = require('../../../controllers/UserController')

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)

module.exports = router