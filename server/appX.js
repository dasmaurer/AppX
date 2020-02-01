const express = require("express");
const bodyParser = require("body-parser");

const appX = express();

appX.use(bodyParser.urlencoded({ extended: false }));
appX.use(bodyParser.json());

appX.listen(8011, function() {
  console.log("AppX listening port 8011");
});
