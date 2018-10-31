var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//variable to install mongoose
var mongoose = require('mongoose');

//connection string linking to mlab database
var mongoDB = 'mongodb://cooke94:password1@ds139883.mlab.com:39883/lab5rc';
mongoose.connect(mongoDB);

//Schema
var Schema = mongoose.Schema;

//format for the entries
var postSchema = new Schema({
    title: String,
    content: String
});

//Posts data to mlab database
var PostData = mongoose.model('post', postSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);

    PostData.create({
        title:req.body.title,
        content:req.body.content
    });

})

app.get('/api/posts', function(req, res){

    PostData.find(function(err,data){

    res.json(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})