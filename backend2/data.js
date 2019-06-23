var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/',(req,res) => {
    res.render('data', {data: [0,1,2,3,4,5,6,7,8,9]})
})

app.listen(3007)