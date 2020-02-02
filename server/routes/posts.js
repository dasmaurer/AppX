const express = require("express");
const router = express.Router();

const controller = require("../controllers/postsController");

router.get("/posts", controller.getPosts);
router.post("/posts/:id", controller.postsID);
router.post("posts", controller.postsLike);

module.exports = router;
