const express = require('express')
const router = express.Router()
const config = require("./config")

const userController = require('./modules/users/user.controller')


exports.init = app => {
    router.route('/user').get(userController.findAll)
    router.route('/user').post(userController.insert)
    router.route('/user/:id').delete(userController.remove)
    router.route('/user/:id').patch(userController.update)
    app.use(config.API_URL, router)
}