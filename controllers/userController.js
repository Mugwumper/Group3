const db = require("../models");

module.exports = {
  login: function(req, res) {
    //console.log("login called");
    //console.log(req.body);
    db.Users
    .findOne({ email: req.body.email })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
    }
}

