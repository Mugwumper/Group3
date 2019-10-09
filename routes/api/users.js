const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/getuserplus"
router.route("/getuserplus")
  .get(userController.getuserplus);

  
module.exports = router;
