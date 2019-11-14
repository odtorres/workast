const config = require("./config")

exports.applyToken = app => {
    app.use((req, res, next) => {
        console.log(config.API_TOKEN + " === " + req.query.token)
        if (config.API_TOKEN === req.query.token) {
            return next()
        }
        res.status(config.HTTP_STATUS_CODE["Unauthorized"]).send("Unauthorized")
    })

}