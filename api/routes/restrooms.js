const express = require("express");
const router = express.Router();

const RestroomsController = require("../controllers/restrooms");

router.post("/", RestroomsController.restrooms_create_restroom);

router.get("/", RestroomsController.restrooms_get_all);

router.get("/:restroomId", RestroomsController.restrooms_get_restroom);

router.delete("/:restroomId", RestroomsController.restrooms_delete_restroom);

module.exports = router;
