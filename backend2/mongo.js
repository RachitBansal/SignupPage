var express = require("express")
var app = express()

app.set("view engine", 'ejs')

console.log('server has been created')
console.log(__dirname)

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDatset', {useNewUrlParser: true})

const Schema = mongoose.Schema
const BlogPost = new Schema({
    title: String,
    body: String,
    date: Date,
    category: String
});

const BlogModel = mongoose.model("User", BlogPost)

app.get('/',(req,res) => {
    res.render('mongo')
})

app.post('/',urlencodedParser,(req,res) => {
    let user = req.user
    let pass = req.pass
    let instance = new BlogModel()
    instance.title = req.body.title
    instance.body = req.body.body
    instance.date = req.body.date
    instance.category = req.body.cat
    instance.save(function(err){
        console.log(err)
    })

    res.render('mongo')
})

BlogModel.find({category:'ml'},(err,docs)=>{
    console.log(docs)
})

app.listen(3006)