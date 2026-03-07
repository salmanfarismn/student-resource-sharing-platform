const express = require("express");
const router = express.Router();
const userController = require("../controllers/auth.controller");

router.post("/signup", userController.SignUp);
router.post("/login", userController.Login);
router.post("/logout", userController.Logout);

module.exports = router;