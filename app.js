const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const logger = (req, res, next) => {
  console.log("url -> ", req.url);
  console.log("method ->", req.method);
  next();
};

const hello = function(req,res) {
    res.send("got it");
}

const main = function(req,res) {
    res.send("This is homepage");
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger);

app.get("/hello", hello);
app.get("/", main);

module.exports = app;