// dependencias
const express = require("express");
const bodyParser = require("body-parser");
// routes
const routes = require("./router");
// express
const appX = express();

appX.use(bodyParser.urlencoded({ extended: false }));
appX.use(bodyParser.json());

appX.use("/", routes);

appX.listen(1010, function() {
  console.log("AppX listening port 1010");
});
