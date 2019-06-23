var express = require('express')
var app = express()

const userController = require('./controllers/userController.js')

app.use('/',userController)

app.listen(3000)