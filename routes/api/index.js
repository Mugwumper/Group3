const router = require("express").Router();
const familyRoutes = require("./family");

// Book routes
router.use("/family", familyRoutes);

module.exports = router;
