const express = require("express");
const router = express.Router();

// defino controller y lo asocio al controlador de los endpoints de auth
const controller = require("../controllers/authController");

router.post("/", controller.postLogIn);
router.post("/", controller.postLogOut);

module.exports = router;
