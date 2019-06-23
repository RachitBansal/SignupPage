var express = require('express')
var app = express()

app.set('view engine', 'ejs')

console.log('server has been created')
console.log(__dirname)

app.get('/', (req,res) => {
    let name = req.query.name
    let mail = req.query.mail
    let password = req.query.pass
    let sex = req.query.sex
    res.render('index', {name: name, mail:mail, password:password, sex:sex})
})

app.listen(3002)