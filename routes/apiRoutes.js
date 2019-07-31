var db = require("../models");
var houseData = require("../data/houses");

module.exports = function(app) {
  // Sends user input to API friends list
  app.get("/api/quiz", function(req, res) {
    res.json(houseData);
  });

  // Retrieves user input from array and displays on API friends list
  app.post("/api/friends", function(req, res) {
    // surveyData.push(req.body);
    // NOTE: Push houseData to database

    var newPerson = req.body.options;
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

  });
  
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
