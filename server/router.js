const express = require("express");
const router = express.Router();

//Agrego las rutas a router de cada controlador
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");
const profilesRoutes = require("./routes/profiles");

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);
router.use("/profiles", profilesRoutes);

module.exports = router;
