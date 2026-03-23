const express = require("express");
const app = express();
const port = 8000;
const urlRoute = require("./routes/url");
const { connectToDb } = require("./connect");
const { connect } = require("mongoose");
const URL = require("./models/url");

connectToDb("mongodb://localhost:27017/short-url")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortID = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: shortID,
    },
    {
      $push: {
        visitedHistory: {
          timeStamp: Date.now(),
        },
      },
    },
  );
  res.redirect(entry.redirectUrl);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
