const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

router.post("/", UserController.user_signup);

router.get("/", UserController.user_get_all);

router.delete("/:userId", UserController.user_delete);

module.exports = router;
