const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const userController = require("../../controllers/userController");
// Matches with "/api/events/saved"
router.route("/saved")
  .post(userController.getsavedevents);

// Matches with "/api/events/toggle"
router.route("/toggle")
  .put(eventController.update);

// Matches with "/api/events/issaved"
router.route("/issaved")
  .get(eventController.getAll);

// Matches with "/api/events/answerkey"
router.route("/answerkey")
  .get(eventController.getAnswerKey);

module.exports = router;