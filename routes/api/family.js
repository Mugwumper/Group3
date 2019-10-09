const router = require("express").Router();
const familyController = require("../../controllers/familyController");
const scrapeController = require("../../controllers/scrapeController");
const userController = require("../../controllers/userController");

// Matches with "/api/family"
router.route("/")
  .get(familyController.findAll)
  .post(familyController.create);

// Matches with "/api/family/:id"
router
  .route("/:id")
  .get(familyController.findById)
  .put(familyController.update)
  .delete(familyController.remove);

// Matches with "/api/family/scrape"
router
  .route("/scrape")
  .post(scrapeController.scraper);

// Matches with "/api/family/login"
router
  .route("/login")
  .post(userController.findByEmail);

// Matches with "/api/family/newuser"
router
  .route("/newuser")
  .post(userController.create);
router
  .route("/setuser")
  .post(userController.setuser);


module.exports = router;
