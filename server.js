//Add express and body-parser for app use
var express = require("express");
var bodyParser = require("body-parser");

//Assign express into a variable. App is the common practice for express.
var app = express();

//Set a defaul port or an automatic one.
var PORT = process.env.PORT || 8080;

//(Middleware) bodyParser configuration so it works with our app.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set a static folder as a default directory
app.use(express.static(__dirname + '/app/public'));
//==========================================================================
// ROUTER
//First we created an external file that exports the html routes (htmlRoutes.html), now we catch them in here by requiring the export modules created in that file. Same process goes for the API routes.

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ========================================================================
//Require this file until it's been created and properly linked.
require("./app/routing/apiRoutes")(app);
// NOTE html routes go last, otherwise, the "Catch all" route will overwrite the API routes.
//Catch all route should be the very last route made in order to avoid routing issues.
require("./app/routing/htmlRoutes")(app);

//=========================================================================

//Initailize the Server
app.listen(PORT, function() {
    console.log("You are now listening on port: " + PORT);
})

//BASIC SETUP OF OUR SERVER IS NOW DONE.
