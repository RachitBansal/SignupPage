var express = require('express')
var app = express()

app.use(session({secret:'keyboard cat', cookie:{maxage:60000}}))

app.get('/', function(req,res,next){
    if(req.session.views) {
        req.session.views++
        res.setHeader('Content-Type','text/html')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else{
        req.session.views = 1
        res.end('welcome!')
    }
})