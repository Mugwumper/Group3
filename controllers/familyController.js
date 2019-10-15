const db = require("../models");
var mongoose = require('mongoose');

// Defining methods for the familyController
module.exports = {
  findAll: function(req, res) {
    db.Family
      .find(req.query)
      .sort({ birthday: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Family
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("familyController.create called");
    console.log(req.body);
    //userEmail = req.body.userEmail;
    db.Family
      .create(req.body)
      .then(function (doc) {
        db.Users.findOneAndUpdate(
          { email: req.body.userEmail },
          { $push: { family: doc._id } }
        )
        .then(function(dbFam) {
            console.log(dbFam);
          })
        .catch(function(err) {
          console.log(err);
        });

        doc => res.json(doc)
      })
      //.catch(err => res.status(422).json(err));
      .catch(err => console.log(err));
  },  
  update: function(req, res) {
    db.Family
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Family
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getFamily: function(req, res) {
    console.log("familyController.getFamily called");
    console.log(req.body.email);
    db.Users
      .find({ email: req.body.email }, 
            'family name birthday')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  delete: function(req, res) {
    console.log("familyController.delete called");
    console.log(req.body);
    db.Family
      //.findById({ _id: mongoose.Types.ObjectId(req.body.id) })
      .findById({ _id: req.body.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .then(function (doc) { 
        db.Users.findOneAndUpdate(
          { email: req.body.userEmail },
          { $pull: { family: doc._id } }
        )
        .then(function(dbFam) {
            console.log(dbFam);
          })
        .catch(function(err) {
          console.log(err);
        });
        dbModel => res.json(dbModel)
      })
      .catch(function(err) {
        console.log(err);
      });
  }  
};
