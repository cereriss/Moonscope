const server = require("../server.js");
const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();

//it parses the form data and adds it to the body property in the request object
app.use(bodyParser.urlencoded({ extended: false }));

//Here there is going to be user routes

//Registration
app.post("/register", (req, res) => {
  const { username, email, password, date } = req.body;
});

//Login
app.post("/login", (req, res) => {
  //Login logic
  // Validate input
  // Check if the user exists
  // Check if the password is correct
  // Create a session
  // Redirect the user to the home page
});

//Logout
app.post("/logout", (req, res) => {
  //Logout logic
  // Destroy the session
  // Redirect the user to the login page
});
