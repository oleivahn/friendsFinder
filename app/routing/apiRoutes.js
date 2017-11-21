// Link the file that contains all the JSON code (Array of people) to the API routes.
//Path is not required in this file because we are not opening any HTML pages on calls.
//Path: .. because we have to get out of the current folder and access a diff one.
var friendsFile = require ("../data/friends.js");

// Link this file to the main server thru an export. ALL ROUTES GO INSIDE THIS FUNCTION. ALL OF IT.
module.exports = function(app){
    // 1 Route. GET request.
    // Render the required file above in JSON format.
    // At this point, I can link this file to my main routes on the server file.
    app.get("/api/friends", function(req, res){
        // console.log("Accessed apiRoutes file");
        // res.end("Hello there.")
        res.json(friendsFile);
        console.log(friendsFile);
    });
    

};
