const db = require("../models");

var currentUserId = "";

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
  
  
}

