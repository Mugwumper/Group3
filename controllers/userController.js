const db = require("../models");
const ObjectId = require('mongodb').ObjectID;

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
  getuserplus: function(req, res) {
    console.log("userController.getuserplus called");
    db.Users
      .find({ email: req.body.email }, 
            'family events isSaved title summary link name birthday')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  getsavedevents: function(req, res) {
    console.log("userController.getsavedevents called");
    db.Users
    .find({ email: req.body.email }, 
      'family events isSaved title summary link name birthday')
    .then(function (doc) {
      var savedEvents = [];
      // get the first (only) element of the array
      doc[0].family.map(person => (
        // for each family member...
        person.events.map(event  => 
          { // for each event...
            if (event.isSaved) savedEvents.push(event);
          } // keep only saved events
        )
      ));
      res.json(savedEvents);
    })
    .catch(err => res.status(422).json(err))
  },
  getfamily: function(req, res) { // untested
    // only list the people (name, bday, _id)
    console.log("userController.getfamily called");
    if (currentUserId) {
      db.Users
      .find({ _id: ObjectId(currentUserId) }, 
        'family name birthday')
      .then(function (doc) {
        var myFamily = [];
        // get the first (only) element of the array
        doc[0].family.map(person => (
          // for each family member...
          myFamily.push(person)
        ));
        res.json(savedEvents);
      })
      .catch(err => res.status(422).json(err))
    } else {
      res = "unable to function without defined currectUserId";
    }
  }  
}



