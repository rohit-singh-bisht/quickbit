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
    visitHistory: [],
  });
  if (result)
    return res
      .status(200)
      .json({ msg: "URL shorten successfully", shortId: uniqueId });
}

async function handleRedirectionToUrl(req, res) {
  const shortId = req.params.id;
  if (!shortId) return res.status(400).json({ msg: "ShortId is required " });

  try {
    const result = await URL.findOne({ shortId });

    if (!result) {
      return res.status(400).json({
        msg: "No redirect URL found. Please create a new one for the original URL",
      });
    }

    result.totalClicks++;
    result.visitHistory.push({ timestamp: Date.now() });

    await result.save();

    res.redirect(result.redirectUrl);
  } catch (error) {
    return res.status(500).json({ msg: "Error processing redirection" });
  }
}

module.exports = {
  handleGenerateNewShortUrl,
  handleRedirectionToUrl,
};
