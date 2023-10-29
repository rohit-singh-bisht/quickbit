const URL = require("../models/url");
const randomstring = require("randomstring");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body) return res.status(400).json({ msg: "URL is required" });
  const uniqueId = randomstring.generate(8);
  const result = await URL.create({
    shortId: uniqueId,
    redirectUrl: body.url,
    totalClicks: 0,
    visitHistory: [{ timestamp: Date.now() }],
  });
  if (result)
    return res
      .status(200)
      .json({ msg: "URL shorten successfully", shortId: uniqueId });
}

module.exports = {
  handleGenerateNewShortUrl,
};
