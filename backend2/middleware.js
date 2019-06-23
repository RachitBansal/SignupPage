var express = require('express')
var app = express()

var middleware = (req,res,next) => {
    console.log('I am middleware')
    next()
}

app.get('/',middleware,(req,res) => {
    console.log('I am a request')
    res.send('Hello')
})

app.listen(3001)