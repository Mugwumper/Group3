const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events"
router.route("/toggle")
  .put(eventController.update);

module.exports = router;