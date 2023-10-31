const express = require("express");
const router = express.Router();

const authController = require("./../controllers/authController");

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);

router.get("/", (req, res) => {
  // Route handler logic for the GET request
  res.render("main");
});

router.get("/login", (req, res) => {
  // Route handler logic for the GET request
  res.render("login");
});

module.exports = router;
