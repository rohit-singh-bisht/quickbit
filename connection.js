const mongoose = require("mongoose");

async function connectMongoDB(url) {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
}

module.exports = connectMongoDB;
