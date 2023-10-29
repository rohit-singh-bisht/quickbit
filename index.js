const express = require("express");
const connectMongoDB = require("./connection");

const app = express();
const port = 8000;

//Connect to database
connectMongoDB("mongodb://127.0.0.1:27017/quickbit");

//connection to express
app.listen(port, (err, data) => {
  if (err) {
    console.log("Error listening to port", err);
  }
  console.log(`Listening to port ${port}`);
});
