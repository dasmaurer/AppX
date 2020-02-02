const express = require("express");
const router = express.Router();

const controller = require("../controllers/profilesController");

router.get("/profiles", controller.getProfiles);

module.exports = router;
