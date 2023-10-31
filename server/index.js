const express = require("express");
const connectMongoDB = require("./connection");
const UrlRoutes = require("./routes/url");

const app = express();
const port = 8000;

//middleware for body json
app.use(express.json());

//Connect to database
connectMongoDB("mongodb://127.0.0.1:27017/quickbit");

app.use(UrlRoutes);

//connection to express
app.listen(port, (err, data) => {
  if (err) {
    console.log("Error listening to port", err);
  }
  console.log(`Listening to port ${port}`);
});
