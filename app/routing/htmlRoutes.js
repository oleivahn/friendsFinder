// Path is required on this file, not on the server.
var path = require("path");

// ROUTES

// This links to the main server file (app) exporting this function to handle the routes.
module.exports = function(app) {
  // HTML GET Requests set up next. API routes will be set up on a diff file, but it will be the same process.

  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  // ROUTE TEMPLATE
  // app.get("/tables", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tables.html"));
  // });
  //----------------------------------------------------------------------------
  app.get("/home", function(req, res) {
      console.log("homePage");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // "CATCH ALL" - If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
