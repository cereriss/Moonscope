const db = require("./server.js");
const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

//Here there is going to be user routes

//Registration
app.post("/register", (req, res) => {
  const { username, email, password, date, time } = req.body;
  // Validate input

  // Check if the user already exists
  // Encrypt the password
  // Store the user details in the database
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
