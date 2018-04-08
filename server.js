// Dependencies
//////////////////////////
var express = require("express");
var bodyParser = require("body-parser");

// Port setup to work with Heroku
var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content from the "public" directory.
app.use(express.static("public"));

// Parse application x-www-form-urlencoded & JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Handlebars setup and layout template designation
///////////////////////////
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing/Controller designation
var routes = require("./controllers/icecreams_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });