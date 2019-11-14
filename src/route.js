const express = require('express')
const router = express.Router()
const config = require("./config")

const policies = require('./security.policies')

const userController = require('./modules/users/user.controller')
const articleController = require('./modules/article/article.controller')


exports.init = app => {

    policies.applyToken(app)

    //user
    router.route('/user').get(userController.findAll)
    router.route('/user').post(userController.insert)
    router.route('/user/:id').delete(userController.remove)
    router.route('/user/:id').patch(userController.update)
    //article
    router.route('/article/').get(articleController.findAll)
    router.route('/article/').post(articleController.insert)
    router.route('/article/:id').delete(articleController.remove)
    router.route('/article/:id').patch(articleController.update)
    router.route('/article/find/tags').post(articleController.findAllByTag)

    app.use(config.API_URL, router)
}