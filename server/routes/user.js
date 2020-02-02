const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

//llamo al controlador y a su metodo de acuerdo al endpoint
router.post("/users", controller.saveUser);
router.get("/users", controller.get);
router.delete("/users/:id", controller.removeUser);
router.put("/users/:id", controller.modifyUser);
router.delete("/users/:id", controller.getUserID);

module.exports = router;
