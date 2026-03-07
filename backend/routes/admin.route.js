const router = require("express").Router();
const adminController = require("../controllers/admin.controller");
const { isAuthenticated, isAdmin } = require("../middleware/auth.middleware");

router.get("/dashboard", isAuthenticated, isAdmin, adminController.adminDashboard);

module.exports = router;