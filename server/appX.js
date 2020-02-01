const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./router");

const appX = express();

appX.use(bodyParser.urlencoded({ extended: false }));
appX.use(bodyParser.json());

appX.use("/", routes);

appX.listen(8011, function() {
  console.log("AppX listening port 8011");
});
