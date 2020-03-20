const path = require("path");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(3000, () => {
  console.log("The server is running on Port 3000");
});
