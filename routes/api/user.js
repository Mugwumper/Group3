const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/getuserplus"
router
  .route("/getuserplus")
  .post(userController.getuserplus);

// Matches with "/api/user/new"
router
  .route("/new")
  .post(userController.create);
  

module.exports = router;
