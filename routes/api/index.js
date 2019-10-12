const router = require("express").Router();
const familyRoutes = require("./family");
const eventRoutes = require("./events");
const userRoutes = require("./user");

//  routes
router.use("/family", familyRoutes);
router.use("/events", eventRoutes);
router.use("/user", userRoutes);

module.exports = router;
