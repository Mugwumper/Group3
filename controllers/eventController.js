const db = require("../models");

module.exports = {
  update: function(req, res) {
     //console.log("req.body is next");
     //console.log(req.body);
      db.Events
      .findOneAndUpdate({ _id: req.body._id }, {isSaved: req.body.isSaved})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));  
  } 
}

