const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
  const shortId = nanoid(8);
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "url is required" });

  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.status(200).json({ id: shortId });
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId: shortId });
    return res.json({
        totalClicks: entry.visitHistory.length,
        analytics: entry.visitHistory
    })
}

module.exports = { handleGenerateShortUrl, handleGetAnalytics };
