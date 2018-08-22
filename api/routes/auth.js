const router = require("express").Router();
const passport = require("passport");

const AuthController = require("../controllers/auth");

// auth Login
router.get("/login", AuthController.auth_login);

// auth logout
router.get("/logout", AuthController.auth_logout);

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to
router.get(
  "/google/redirect",
  passport.authenticate("google"),
  AuthController.auth_google_redirect
);

module.exports = router;
