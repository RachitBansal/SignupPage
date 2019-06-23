var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.set('view engine', 'ejs')

console.log('server has been created')
console.log(__dirname)

app.get('/', (req,res) => {
    res.render('counter', {counter:0})
})

app.post('/',urlencodedParser, (req,res) => {
    let c = Number(req.body.previous || -1)
    if(req.body.i == 'i'){
        c = c + 1 
    }
    else{
        c = c - 1
    }
    res.render('counter', {counter:c})
})

app.listen(3002)