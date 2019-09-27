const router = require("express").Router();
const familyController = require("../../controllers/familyController");

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

module.exports = router;
