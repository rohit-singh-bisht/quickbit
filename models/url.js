const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    totalClicks: {
      type: Number,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
