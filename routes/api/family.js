const router = require("express").Router();
const familyController = require("../../controllers/familyController");
const scrapeController = require("../../controllers/scrapeController");

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

module.exports = router;
