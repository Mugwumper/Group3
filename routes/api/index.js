const router = require("express").Router();
const familyRoutes = require("./family");
const eventRoutes = require("./events");
const userRoutes = require("./users");

//  routes
router.use("/family", familyRoutes);
router.use("/events", eventRoutes);
router.use("/users", userRoutes);

module.exports = router;
