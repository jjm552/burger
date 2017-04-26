// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

// EXPRESS CONFIG.
var app = express();
var PORT = process.env.PORT || 3030;

// SERVER STATIC CONTENT "PUBLIC" DIRECTORY
app.use(express.static(process.cwd() + "/public"));


// OVERRIDE WITH POST HAVING ?_method=DELETE
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

// SET HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// SET ROUTES
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// ROUTER		
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// BODY-PARSER
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});