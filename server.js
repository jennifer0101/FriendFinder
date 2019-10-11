//Dependencies
//var path = require("path");
var express = require("express");
//var bodyParser = require('body-parser');

//Set up express app
var app = express();
var PORT = process.env.PORT || 8080;

//Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Route to api files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener to start server
app.listen(PORT, function() {
  console.log("Friend Finder App listening on PORT: " + PORT);
});
