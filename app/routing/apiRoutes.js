
var friends = require("../data/friends");
var characters = require("../data/friends")

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
};