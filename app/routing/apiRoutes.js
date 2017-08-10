
var friends = require("../data/friends");
var characters = require("../data/characters")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.get("/api/characters", function(req, res) {
    res.json(characters);
  });

  app.post("/api/friends", function(req, res) {
      friends.push(req.body);
      res.json(true);
  });

  // clears the data from friends array
  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
    console.log(friends);
  });


};