const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//MySql connection
const db = mysql.createConnection({
  host: "localhost",
  user: "michelle",
  password: "0987654321",
  database: "moonscope",
});

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect
db.connect((err) => {
  if (err) {
    console.log("Error connecting to Moonscope's database", err);
  } else {
    console.log("Connected to Moonscope's database");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
