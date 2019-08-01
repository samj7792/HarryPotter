var db = require("../models");
var houseData = require("../data/houses");

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

  // app.get("/api/playeranswers", function(req, res) {
  //   db.Story.findAll({}).then(function(data) {
  //     res.json(data);
  //   })
  // });

  // Retrieves user input from array and posts to players list
  // userAnswerArr = []
  app.post("/api/players", function(req, res) {
    // userAnswerArr.push(req.body);


    // var newPerson = req.body["options[]"];
    // console.log("userAnswerArr");
    // console.log(userAnswerArr);
    // console.log("newPerson");
    // console.log(newPerson);
    // console.log("req.body");
    // console.log(req.body);
    // var houseMatch;
    // var housePhoto;
    
    // var diffArr = [];
    // for (var i = 0; i < houseData.length; i++) {
    //     var difference = 0;
    //     for (var j = 0; j < newPerson.length; j++) {
    //         difference += Math.abs(houseData[i].options[j] - newPerson[j]);
    //     }
        
    //     console.log(difference);
    //     diffArr.push(difference)
    // }
    // console.log(diffArr);
    // console.log(Math.min(...diffArr));
    // var matchNum = diffArr.indexOf(Math.min(...diffArr));
    // console.log(matchNum);
    // houseMatch = houseData[matchNum].name;
    // housePhoto = houseData[matchNum].photo;
    // console.log(houseMatch);
    // console.log(housePhoto);

    // res.json({
    //   houseName: houseMatch, 
    //   houseImage: housePhoto
    // });

    console.log(req.body);

    db.Story.create({
      playerName: req.body.playerName
    });
    res.status(204).end();

    // db.Story.create({
    //   house: houseMatch
    // });
    // res.status(204).end();

  });

  app.put("/api/players", function(req, res) {
    userAnswerArr.push(req.body);


    var newPerson = req.body["options[]"];
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
        playerName: playerName2
      }
    });
    res.status(204).end();
  });

  // app.post("api/players", function(req, res) {
  //   db.Story.create({
  //     house: houseMatch
  //   });
  //   res.status(204).end();
  // })
  
  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Story.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Story.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Story.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
