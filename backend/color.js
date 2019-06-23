var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.set('view engine', 'ejs')

console.log('server has been created')
console.log(__dirname)

app.get('/', (req,res) => {
    res.render('color', {color:'black'})
})

app.post('/',urlencodedParser, (req,res) => {
    let c = req.body.color || 'black'
    if(req.body.r == 'r'){
        c = 'red'
    }
    if(req.body.y == 'y'){
        c = 'yellow'
    }
    if(req.body.b == 'b'){
        c = 'blue'
    }
    res.render('color', {color:c})
})

app.listen(3002)