const db = require("../models");

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
    db.Family
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
  }
};
