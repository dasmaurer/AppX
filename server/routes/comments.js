const express = require("express");
const router = express.Router();

const controller = require("../controllers/commentsController");

router.post("/comments", controller.postComment);
router.get("/comments/:id", controller.commentID);

module.exports = router;
