const path = require("path");
const express = require("express");
const router = require("./router");
const hbs = require("hbs");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

app.listen(3000, () => {
  console.log("The server is running on Port 3000");
});

module.exports = app;
