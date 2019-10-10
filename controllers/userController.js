const db = require("../models");
const ObjectId = require('mongodb').ObjectID;

currentUserId = "5d98c9ab073a76c86a562654";

module.exports = {
  findByEmail: function(req, res) {
    console.log("userController.findByEmail called");
    console.log(req.body);
    db.Users
    .find({ email: req.body.email })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    console.log("userController.create called");
    console.log(req.body);
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  setuser: function(req, res) {
    console.log("userController.setuser called");
    console.log(req.body);
    console.log(req.body.id);
    currentUserId = req.body.id;
  },
  getuserplus: function(req, res) {
    console.log("userController.getuserplus called");
    if (currentUserId) {
      db.Users
      .find({ _id: ObjectId(currentUserId) }, 
        'family events isSaved title summary link name birthday')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    } else {
      res = "unable to function without defined currectUserId";
    }
  },
  getsavedevents: function(req, res) {
    console.log("userController.getuserplus called");
    if (currentUserId) {
      db.Users
      .find({ _id: ObjectId(currentUserId) }, 
        'family events isSaved title summary link name birthday')
      .then(function (doc) {
        var savedEvents = [];
        // get the first (only) element of the array
        doc[0].family.map(person => (
          // for each family member...
          person.events.map(event  => 
            // for each event...
            {            
              // keep only saved events
              if (event.isSaved) savedEvents.push(event);
            }
          )
        ));
        res.json(savedEvents);
      })
      .catch(err => res.status(422).json(err))
    } else {
      res = "unable to function without defined currectUserId";
    }
  }  
}



