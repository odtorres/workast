
const config = require("./src/config")

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.API_PORT, () => console.log(`Example app listening on port ${config.API_PORT}!`))