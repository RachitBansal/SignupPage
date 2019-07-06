var express = require('express')
var app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))
var fs = require('fs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Register', { useNewUrlParser: true });

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var bodyParser = require("body-parser")
// var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const UserSchema = new Schema({
    // id: ObjectId,
    email: {
        type: String,
        unique: true
    },
    pass: String,
    cpass: String
});

const User = mongoose.model('user', UserSchema);

app.get('/', (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            console.log(err, 'error')
            return
        }
    
        res.render('login')
    })
})

app.post('/', urlencodedParser, (req, res) => {
    switch(req.body.action) {
        case 'signup':
            User.find({email:req.body.email},function(err,doc){
                if(err) {
                    console.log(err,'error')
                    res.redirect('/')
                    return
                }   
                if(doc==[]) {
                    let instance = new User()
                    instance.email = req.body.email
                    instance.pass = req.body.pass
                    instance.cpass = req.body.cpass
                    instance.save(function(err){
                        console.log(err)
                    })
                res.render('login',{'message':'Registered, please sign in'})
                }
            )}
        case 'login':
            User.find({email:req.body.email,pass:req.body.pass},function(err,doc){
                if(err){
                    console.log(err,'error')
                    res.redirect('/')
                    return
                }
                if(doc != []){
                    res.session.user = doc
                }
            })

    }
})

app.listen(3000, () => {
    console.log("Server is running")
})