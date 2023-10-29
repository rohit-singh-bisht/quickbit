const mongoose = require("mongoose");

async function connectMongoDB(url) {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Connected successfully");
    })
    .catch((err) => {
      console.log("Connection error", err);
    });
}

module.exports = connectMongoDB;
