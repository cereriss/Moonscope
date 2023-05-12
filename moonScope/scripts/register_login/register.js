const db = require("../general/connection.js");
const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

//route for user registration
app.post("/register", async (req, res) => {
  const { username, email, password, birth, time } = req.body;

  try {
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //insert the user into the database
    const sql =
      "INSERT INTO users (username, email, password, birth, time) VALUES (?, ?, ?, ?, ?)";
    db.query(
      sql,
      [username, email, hashedPassword, birth, time],
      (err, result) => {
        if (err) {
          console.error("Error registering user: ", err);
          res.status(500).send("Error registering user.");
        } else {
          //refirect to login page
          res.redirect("/login");
        }
      }
    );
  } catch (err) {
    console.error("Error hashing the password: ", err);
    res.status(500).send("An error occurred");
  }
});
