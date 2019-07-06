var express = require('express')
var router = express.Router()

const BlogModel = require('../models/attendance.js')

router.get('/',(req,res)=>{
    res.render('attendance')
})

module.exports = router