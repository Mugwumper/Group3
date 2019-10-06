const db = require("../models");
const request = require("request");
const cheerio = require("cheerio");

module.exports = {
  login: function(req, res) {
    console.log("loging the user now....");
    console.log(req.body);
    db.Users
    .findOne({ email: req.body.email })
    .then(dbModel => res.json(dbModel))
//    .then(dbModel => console.log(dbModel))
    .catch(err => res.status(422).json(err))
    }
}

