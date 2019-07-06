var express = require('express')
var app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/newdb', {useNewUrlParser:true})
9i
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title:String
})

const Task = mongoose.

app.get('/',(req,res)=>{
    setTimeout(()=>{
        console.log('1')
    })
    console.log('2')
})

app.listen(300,()=>{
    console.log('Server is running')
})