var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var cors = require("cors");
var port = process.env.PORT || 3000;

var Question = require('./api/models/questionModel'); //created model loading here

var app = express();
app.use(cors());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/junior")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/questionRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Junior Maker RESTful API server started on: ' + port);