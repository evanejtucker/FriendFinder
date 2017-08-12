
var friends = require("../data/friends");
var characters = require("../data/characters");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.get("/api/characters", function(req, res) {
    res.json(characters);
  });

  app.post("/api/friends", function(req, res) {
      
      // create object to store best match
      var bestFriend = {
        name: "",
        photo: "",
        friendDifference: 1000
      }

      // holds the user posted data
      var userData = req.body;
      var userScores = userData.scores;

      // this variable will measure the score difference between the 2 objects... 
      // ...being compared, lower score is better.
      var totalDifference = 0;
      var characterDifference = 0;

      // will loop through each friend in the array
      for (i=0; i<characters.length; i++) {

        totalDifference = 0;

        // next loop through each score in friends[i], and com pare them...
        // to userData scores and calc the absolute difference.
        for (x=0; x<characters[i].scores.length; x++) {

          // calculate total score
          totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(characters[i].scores[x]));
          
        }

        // checks if friend[i]'s totalDifference is less than the bestFriend,... 
        // ...friend difference, if so, it becomes the new best match
        console.log("Character Name: ", characters[i].name, "Total Score: ", totalDifference);

        if (totalDifference <= bestFriend.friendDifference) {
          // sets bestFriend variables to best match
          bestFriend.name = characters[i].name;
          bestFriend.photo = characters[i].photo;
          bestFriend.friendDifference = totalDifference;

          console.log("The new best match is " + bestFriend.name + " with a friend score of: " + totalDifference + "\n");

        } else {
          // character is not the best match.
          console.log(characters[i].name + " is not your best friend\n")
        }
      }

      friends.push(userData);
      res.json(bestFriend);
      console.log(bestFriend);
      console.log("-----------------------------------------------");
  });



};