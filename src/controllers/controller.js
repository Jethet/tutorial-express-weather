const axios = require("axios");
const dotenv = require("dotenv").config();

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  console.log(req);

  const city = req.body.city;
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
