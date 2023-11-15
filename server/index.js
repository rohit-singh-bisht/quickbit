require('dotenv').config()
const express = require("express");
const connectMongoDB = require("./connection");
const UrlRoutes = require("./routes/url");
const UserRoutes = require("./routes/user");
const cors = require('cors');

const app = express();
const port = 8000;

//middleware for body json
app.use(express.json());
app.use(cors());

//Connect to database
connectMongoDB(process.env.MONGO_URL);

app.use(UrlRoutes);
app.use(UserRoutes);

//connection to express
app.listen(port, (err, data) => {
  if (err) {
    console.log("Error listening to port", err);
  }
  console.log(`Listening to port ${port}`);
});
