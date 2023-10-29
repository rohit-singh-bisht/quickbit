const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleRedirectionToUrl,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:id", handleRedirectionToUrl);

module.exports = router;
