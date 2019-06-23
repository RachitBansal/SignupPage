/*var express = require("express")
var app = express()

app.set("view engine", 'ejs')

console.log('server has been created')
console.log(__dirname)

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todoList', {useNewUrlParser: true})

const Schema = mongoose.Schema
const toDo = new Schema({/
    title: String,
    task: String
});

const toDoModel = mongoose.model("UserTasks", toDo)

app.get('/',(req,res) => {
    toDoModel.find({},(err,docs)=>{
        res.render('to-do',{task:docs})
    })
})

app.post('/',urlencodedParser,(req,res) => {
    let instance = new toDoModel()
    instance.title = req.body.title
    instance.task = req.body.body
    instance.save(function(err){
        console.log(err)
        return
    })

    res.redirect('/')
})

app.listen(3006)*/
var express = require('express')
var app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))
var fs = require('fs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newdb', { useNewUrlParser: true });

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var bodyParser = require("body-parser")
// var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const TaskSchema = new Schema({
    // id: ObjectId,
    title: String
});

const Task = mongoose.model('Task', TaskSchema);

app.get('/', (req, res) => {
    Task.find({}, (err, docs) => {
        if (err) {
            console.log(err, 'error')
            return
        }
    
        res.render('to-do', { tasks: docs, edit: false })
    })
})

app.post('/', urlencodedParser, (req, res) => {
    switch (req.body.button) {
        
        case 'delete':
            Task.deleteOne({ _id: req.body.id }, function (err) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
                res.redirect('/')
            });
            break
        case 'create':
            let newTask = new Task();
            newTask.title = req.body.title;
            newTask.save(function (err) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
                res.redirect('/')
            });
            break
        case 'save':
            Task.updateOne({ _id: req.body.id }, { title: req.body.title }, function (err, writeOpResult) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
                res.redirect('/')
            });
            break
        case 'edit':
            Task.findById(req.body.id, function (err, doc) {
                if (err) {
                    console.log(err, 'error')
                    return
                }
                res.render('to-do', { edit: true, title: doc.title, id: doc.id })
            });
            break
    }

    res.render('to-do', { time: 120 })
})

app.listen(3005, () => {
    console.log("Server is running")
})