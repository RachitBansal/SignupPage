var express = require('express')
var router = express.Router()

const BlogModel = require('../models/mong.js')

router.get('/auth',(req,res)=>{
    res.send('Hello')
})

module.exports = router