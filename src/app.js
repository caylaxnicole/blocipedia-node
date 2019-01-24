const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
// const stripe = require("stripe")("sk_test_5DitlpTEWIvZVb6uZfl6jIWd");


appConfig.init(app, express);
routeConfig.init(app);
module.exports = app;
