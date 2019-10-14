const router = require("express").Router();
const familyController = require("../../controllers/familyController");
const scrapeController = require("../../controllers/scrapeController");
const scrapeControllerNYT = require("../../controllers/scrapeControllerNYT");
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
//  .post(scrapeController.scraper);
  .post(scrapeControllerNYT.scraper);

// Matches with "/api/family/login"
router // dead?
  .route("/login")
  .post(userController.findByEmail);

router 
  .route("/getfamily")
  .post(familyController.getFamily);
  
// Matches with "/api/family/delete"
router 
.route("/delete")
.post(familyController.delete);

module.exports = router;