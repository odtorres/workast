
const config = require("./src/config")
const api = require('./src/route')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
api.init(app)

app.listen(config.API_PORT, () => console.log(`Example app listening on port ${config.API_PORT}!`))