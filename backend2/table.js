var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('stuff'))

app.get('/',(req,res) => {
    res.render('table', {data: [['S NO.', 'Name', 'Marks'],[1,'A',30],[2,'B',40],[3,'C',50]]})
})

app.listen(3007)