const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/events/toggle"
router.route("/toggle")
  .put(eventController.update);

// Matches with "/api/events/issaved"
router.route("/issaved")
  .get(eventController.getAll);
module.exports = router;

// Matches with "/api/events/answerkey"
router.route("/answerkey")
  .get(eventController.getAnswerKey);
module.exports = router;