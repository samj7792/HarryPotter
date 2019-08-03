var db = require("../models");
var houseData = require("../data/houses");
var friendData = require("../data/friends");
var classData = require("../data/classes");

module.exports = function(app) {


  // Displays house data
  app.get("/api/housequiz", function(req, res) {
    res.json(houseData);
  });
  
  userAnswerArr = [];
  // Displays player data
  app.get("/api/players", function(req, res) {
      res.json(userAnswerArr);
  });

  // Retrieves user input from array and posts to players list
  app.post("/api/players", function(req, res) {
    
    console.log(req.body);

    db.Story.create({
      playerName: req.body.playerName
    })
    .then(function(result) {
      res.json(result);
    });

  });

  // Finding the player's house match 
  app.put("/api/players", function(req, res) {
    // userAnswerArr.push(req.body);
    console.log(req.body);

    var currentID = req.body.playerID;

    var newPerson = req.body["userAnswers[options][]"];
    console.log("userAnswerArr");
    console.log(userAnswerArr);
    console.log("newPerson");
    console.log(newPerson);
    console.log("req.body");
    console.log(req.body);
    var houseMatch;
    var housePhoto;
    
    var diffArr = [];
    for (var i = 0; i < houseData.length; i++) {
        var difference = 0;
        for (var j = 0; j < newPerson.length; j++) {
            difference += Math.abs(houseData[i].options[j] - newPerson[j]);
        }
        
        console.log(difference);
        diffArr.push(difference)
    }
    console.log(diffArr);
    console.log(Math.min(...diffArr));
    var matchNum = diffArr.indexOf(Math.min(...diffArr));
    console.log(matchNum);
    houseMatch = houseData[matchNum].name;
    housePhoto = houseData[matchNum].photo;
    console.log(houseMatch);
    console.log(housePhoto);

    res.json({
      houseName: houseMatch, 
      houseImage: housePhoto
    });
    
    db.Story.update({
      house: houseMatch
    }, {
      where: {
        id: currentID
      }
    });
    res.status(204).end();
  });

  // Finding the player's character match
  app.put("/api/players/friends", function(req, res) {
    var currentID = req.body.playerID;
    var newPerson = req.body["userAnswers[options][]"];
    var friendMatch;
    var friendPhoto;
    
    var diffArr = [];
    for (var i = 0; i < friendData.length; i++) {
        var difference = 0;
        for (var j = 0; j < newPerson.length; j++) {
            difference += Math.abs(friendData[i].options[j] - newPerson[j]);
        }
        
        diffArr.push(difference)
    }
    var matchNum = diffArr.indexOf(Math.min(...diffArr));
    friendMatch = friendData[matchNum].name;
    friendPhoto = friendData[matchNum].photo;


    res.json({
      friendName: friendMatch, 
      friendImage: friendPhoto
    });
    
    db.Story.update({
      characterMatch: friendMatch
    }, {
      where: {
        id: currentID
      }
    });
  });

  app.put("/api/players/class", function(req, res) {
    var currentID = req.body.playerID;
    console.log(currentID);
    var newPerson = req.body["userAnswers[options][]"];
    console.log(newPerson);
    var classMatch;
    var classPhoto;
    
    var diffArr = [];
    for (var i = 0; i < classData.length; i++) {
        var difference = 0;
        for (var j = 0; j < newPerson.length; j++) {
            difference += Math.abs(classData[i].options[j] - newPerson[j]);
        }
        
        diffArr.push(difference)
    }
    var matchNum = diffArr.indexOf(Math.min(...diffArr));
    classMatch = classData[matchNum].name;
    classPhoto = classData[matchNum].photo;


    res.json({
      className: classMatch, 
      classImage: classPhoto
    });
    
    db.Story.update({
      class: classMatch
    }, {
      where: {
        id: currentID
      }
    });
  })

};

