const router = require("express").Router();
const familyRoutes = require("./family");
const eventRoutes = require("./events");

//  routes
router.use("/family", familyRoutes);

router.use("/events", eventRoutes);


module.exports = router;
